import { Question } from "@/types/question";
import { normalizeScore } from "./normalizeScore";

export interface DimensionScoreDetail {
  raw: number;
  minPossible: number;
  maxPossible: number;
  normalized: number; // 0–100
  questionCount: number;
}

export interface CalculationResult {
  overallRaw: number;
  overallMinPossible: number;
  overallMaxPossible: number;
  overallNormalized: number; // 0–100
  dimensions: Record<string, DimensionScoreDetail>;
  dimensionNormalizedMap: Record<string, number>; // simple { [dim]: 0-100 }
}

/**
 * Calculates the effective score for a single question, applying reverse scoring if configured
 */
export function calculateEffectiveScore(question: Question, rawAnswerValue: number): number {
  const weight = question.weight ?? 1;

  if (!question.reversed || !question.options.length) {
    return rawAnswerValue * weight;
  }

  // Reverse scoring formula: (min + max) - raw
  const optionValues = question.options.map((o) => o.value);
  const minVal = Math.min(...optionValues);
  const maxVal = Math.max(...optionValues);

  const reversedValue = minVal + maxVal - rawAnswerValue;
  return reversedValue * weight;
}

/**
 * Calculates overall and dimension-level scores from answers
 */
export function calculateAssessmentScores(
  questions: Question[],
  answers: Record<string, number>
): CalculationResult {
  const dimensions: Record<string, DimensionScoreDetail> = {};
  let overallRaw = 0;
  let overallMinPossible = 0;
  let overallMaxPossible = 0;

  for (const question of questions) {
    const rawVal = answers[question.id];
    if (typeof rawVal !== "number") continue;

    const weight = question.weight ?? 1;
    const optionValues = question.options.map((o) => o.value);
    const minVal = Math.min(...optionValues) * weight;
    const maxVal = Math.max(...optionValues) * weight;

    const effectiveScore = calculateEffectiveScore(question, rawVal);

    // Accumulate overall bounds
    overallRaw += effectiveScore;
    overallMinPossible += minVal;
    overallMaxPossible += maxVal;

    // Accumulate dimension bounds
    const dim = question.dimension || "General";
    if (!dimensions[dim]) {
      dimensions[dim] = {
        raw: 0,
        minPossible: 0,
        maxPossible: 0,
        normalized: 0,
        questionCount: 0,
      };
    }

    dimensions[dim].raw += effectiveScore;
    dimensions[dim].minPossible += minVal;
    dimensions[dim].maxPossible += maxVal;
    dimensions[dim].questionCount += 1;
  }

  // Normalize each dimension to 0–100
  const dimensionNormalizedMap: Record<string, number> = {};
  for (const [dim, detail] of Object.entries(dimensions)) {
    detail.normalized = normalizeScore(detail.raw, detail.minPossible, detail.maxPossible);
    dimensionNormalizedMap[dim] = detail.normalized;
  }

  const overallNormalized = normalizeScore(
    overallRaw,
    overallMinPossible,
    overallMaxPossible
  );

  return {
    overallRaw,
    overallMinPossible,
    overallMaxPossible,
    overallNormalized,
    dimensions,
    dimensionNormalizedMap,
  };
}
