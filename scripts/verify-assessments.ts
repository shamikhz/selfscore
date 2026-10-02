import { ASSESSMENTS_CATALOG } from "../lib/assessments-catalog";
import { getAssessmentDefinition } from "../assessments/registry";
import { calculateAssessmentScores } from "../lib/assessment-engine/calculateScore";
import { generateAssessmentResult } from "../lib/assessment-engine/resultGenerator";

console.log("==================================================");
console.log("🔍 RUNNING COMPREHENSIVE ASSESSMENT VERIFICATION");
console.log("==================================================");

let totalErrors = 0;

console.log(`\n📋 Checking catalog count: ${ASSESSMENTS_CATALOG.length} assessments registered.`);
if (ASSESSMENTS_CATALOG.length !== 20) {
  console.error(`❌ Expected 20 assessments in catalog, found ${ASSESSMENTS_CATALOG.length}`);
  totalErrors++;
} else {
  console.log(`✅ Exactly 20 assessments present in ASSESSMENTS_CATALOG.`);
}

let totalQuestionsAcrossPlatform = 0;

for (const meta of ASSESSMENTS_CATALOG) {
  console.log(`\n--- [${meta.id.toUpperCase()}] ${meta.title} (${meta.slug}) ---`);
  const def = getAssessmentDefinition(meta.slug);

  if (!def) {
    console.error(`❌ Failed to retrieve definition for slug: ${meta.slug}`);
    totalErrors++;
    continue;
  }

  // 1. Question count check
  const qCount = def.questions.length;
  totalQuestionsAcrossPlatform += qCount;
  if (qCount !== 20) {
    console.error(`❌ Expected exactly 20 questions, found ${qCount}`);
    totalErrors++;
  } else {
    console.log(`✅ Question count: 20`);
  }

  // 2. Question IDs uniqueness
  const ids = new Set<string>();
  let duplicateIds = 0;
  for (const q of def.questions) {
    if (ids.has(q.id)) {
      console.error(`❌ Duplicate question ID found: ${q.id}`);
      duplicateIds++;
      totalErrors++;
    }
    ids.add(q.id);
  }
  if (duplicateIds === 0) {
    console.log(`✅ All 20 question IDs are strictly unique.`);
  }

  // 3. Dimension mapping check
  const declaredDims = new Set(meta.dimensions);
  let invalidDims = 0;
  for (const q of def.questions) {
    if (!declaredDims.has(q.dimension)) {
      console.error(`❌ Question '${q.id}' references undeclared dimension: '${q.dimension}'`);
      invalidDims++;
      totalErrors++;
    }
  }
  if (invalidDims === 0) {
    console.log(`✅ All question dimensions map directly to declared meta.dimensions.`);
  }

  // 4. Scoring Engine Simulation
  // A) Minimum score test
  const minAnswers: Record<string, number> = {};
  const maxAnswers: Record<string, number> = {};
  const midAnswers: Record<string, number> = {};

  for (const q of def.questions) {
    const sortedOptions = [...q.options].sort((a, b) => a.value - b.value);
    minAnswers[q.id] = sortedOptions[0].value;
    maxAnswers[q.id] = sortedOptions[sortedOptions.length - 1].value;
    midAnswers[q.id] = sortedOptions[Math.floor(sortedOptions.length / 2)].value;
  }

  const minResult = generateAssessmentResult({
    assessmentId: meta.id,
    questions: def.questions,
    answers: minAnswers,
    tiers: def.tiers,
    resolveInsights: def.resolveInsights,
  });

  const maxResult = generateAssessmentResult({
    assessmentId: meta.id,
    questions: def.questions,
    answers: maxAnswers,
    tiers: def.tiers,
    resolveInsights: def.resolveInsights,
  });

  const midResult = generateAssessmentResult({
    assessmentId: meta.id,
    questions: def.questions,
    answers: midAnswers,
    tiers: def.tiers,
    resolveInsights: def.resolveInsights,
  });

  // Verify non-NaN, valid number ranges
  if (
    isNaN(minResult.score) ||
    isNaN(maxResult.score) ||
    isNaN(midResult.score) ||
    !isFinite(minResult.score) ||
    !isFinite(maxResult.score)
  ) {
    console.error(`❌ NaN or Infinity detected during score calculation for ${meta.id}`);
    totalErrors++;
  } else {
    console.log(
      `✅ Score Ranges Validated -> Min: ${minResult.score} (${minResult.tier.label}) | Mid: ${midResult.score} | Max: ${maxResult.score} (${maxResult.tier.label})`
    );
  }

  // Check dimensions output
  const dimKeys = Object.keys(midResult.dimensions);
  if (dimKeys.length === 0) {
    console.error(`❌ Dimension breakdown empty for ${meta.id}`);
    totalErrors++;
  } else {
    console.log(`✅ Calculated ${dimKeys.length} dimension normalized scores:`, dimKeys.join(", "));
  }

  // Check insights resolution
  if (
    !minResult.insights?.length ||
    !minResult.strengths ||
    !minResult.growthAreas ||
    !minResult.actionSteps
  ) {
    console.error(`❌ Insights structure incomplete for ${meta.id}`);
    totalErrors++;
  } else {
    console.log(`✅ Result insights & recommendations generated successfully.`);
  }
}

console.log("\n==================================================");
console.log(`TOTAL PLATFORM QUESTIONS: ${totalQuestionsAcrossPlatform}`);
console.log(`TOTAL VERIFICATION ERRORS: ${totalErrors}`);
console.log("==================================================");

if (totalErrors > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL 20 ASSESSMENTS PASS 100% OF INTEGRITY TESTS!");
}
