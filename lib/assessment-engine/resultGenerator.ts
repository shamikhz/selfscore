import { Question } from "@/types/question";
import { AssessmentResult, ScoreTier } from "@/types/result";
import { calculateAssessmentScores } from "./calculateScore";

export interface InsightsData {
  insights: string[];
  strengths: string[];
  growthAreas: string[];
  actionSteps: string[];
}

export interface GenerateResultOptions {
  assessmentId: string;
  questions: Question[];
  answers: Record<string, number>;
  tiers: ScoreTier[];
  resolveInsights?: (
    overallScore: number,
    dimensionMap: Record<string, number>,
    tier: ScoreTier
  ) => InsightsData;
}

/**
 * Finds the matching tier for a given score (0-100)
 */
export function resolveTier(score: number, tiers: ScoreTier[]): ScoreTier {
  if (!tiers.length) {
    return {
      id: "general",
      label: "Completed",
      minScore: 0,
      maxScore: 100,
      summary: "You have successfully completed this assessment.",
      color: "var(--primary)",
    };
  }

  // Exact range match
  const matched = tiers.find(
    (t) => score >= t.minScore && score <= t.maxScore
  );
  if (matched) return matched;

  // Fallback: If score exceeds or is under, return closest tier
  if (score < tiers[0].minScore) return tiers[0];
  return tiers[tiers.length - 1];
}

/**
 * Generates a full, strongly-typed AssessmentResult object
 */
export function generateAssessmentResult(
  options: GenerateResultOptions
): AssessmentResult {
  const { assessmentId, questions, answers, tiers, resolveInsights } = options;

  const calculation = calculateAssessmentScores(questions, answers);
  const matchedTier = resolveTier(calculation.overallNormalized, tiers);

  let insightsData: InsightsData = {
    insights: [matchedTier.summary],
    strengths: [],
    growthAreas: [],
    actionSteps: [],
  };

  if (resolveInsights) {
    insightsData = resolveInsights(
      calculation.overallNormalized,
      calculation.dimensionNormalizedMap,
      matchedTier
    );
  }

  return {
    assessmentId,
    score: calculation.overallNormalized,
    rawScore: calculation.overallRaw,
    tier: matchedTier,
    dimensions: calculation.dimensionNormalizedMap,
    answers,
    completedAt: new Date().toISOString(),
    version: 1,
    insights: insightsData.insights,
    strengths: insightsData.strengths,
    growthAreas: insightsData.growthAreas,
    actionSteps: insightsData.actionSteps,
  };
}
