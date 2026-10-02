import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveDecisionMakingInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const analytical = dimensionMap["Analytical Thinking"] ?? 50;
  const decisiveness = dimensionMap["Decisiveness"] ?? 50;
  const risk = dimensionMap["Risk Awareness"] ?? 50;
  const intuition = dimensionMap["Intuition"] ?? 50;
  const reflection = dimensionMap["Reflection"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths
  if (analytical >= 70) {
    strengths.push("Evidence-Based Evaluation: You dissect complex variables with structured logic, mitigating cognitive biases and superficial assumptions.");
  }
  if (decisiveness >= 70) {
    strengths.push("Execution Conviction: High tolerance for ambiguity allows you to cut through hesitation and maintain decisive forward momentum.");
  }
  if (risk >= 70) {
    strengths.push("Downside Protection: You astutely stress-test potential points of failure, protecting your baseline before chasing upside.");
  }
  if (intuition >= 70) {
    strengths.push("Holistic Pattern Recognition: Effective at synthesizing past experiential insights and reading subtle contextual clues swiftly.");
  }
  if (reflection >= 70) {
    strengths.push("Continuous Cognitive Calibration: You objectively review past outcomes and readily update your mental models when facts change.");
  }
  if (strengths.length === 0) {
    strengths.push("Practical Flexibility: You adapt your choice mechanisms dynamically to fit immediate context and team needs.");
  }

  // Growth Areas
  if (decisiveness < 60) {
    growthAreas.push("Analysis Paralysis: A tendency to delay commitment while searching for elusive 100% certainty.");
  }
  if (analytical < 60) {
    growthAreas.push("Impulsive Assumptions: Relying heavily on first impressions without verifying underlying data or hidden trade-offs.");
  }
  if (risk < 60) {
    growthAreas.push("Second-Order Blindspots: Underestimating cascading consequences or neglecting contingency planning for worst-case scenarios.");
  }
  if (reflection < 60) {
    growthAreas.push("Post-Choice Closure: Moving on so quickly after decisions that valuable feedback loops and operational lessons are lost.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Balancing Speed with Thoroughness: Determining precisely which decisions are reversible ('two-way doors') versus irreversible ('one-way doors').");
  }

  // Action Steps
  actionSteps.push("Apply Jeff Bezos' 70% Rule: Commit to decisions when you have roughly 70% of desired information rather than waiting for 90%+.");
  actionSteps.push("Maintain a concise 'Decision Journal': note the date, rationale, expected outcome, and confidence level for significant choices to review 6 months later.");
  actionSteps.push("For high-consequence choices, conduct a 10-minute 'Pre-Mortem': imagine the plan failed completely, then identify the most likely vulnerabilities to fix in advance.");

  const topDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your primary decision pillar is ${topDimension?.[0] || "Analytical Thinking"} (${Math.round(
        topDimension?.[1] || 75
      )}%), shaping how you process trade-offs under uncertainty.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
