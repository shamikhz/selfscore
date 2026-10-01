import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolvePersonalityInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const openness = dimensionMap["Openness"] ?? 50;
  const conscientiousness = dimensionMap["Conscientiousness"] ?? 50;
  const social = dimensionMap["Social Energy"] ?? 50;
  const empathy = dimensionMap["Empathy"] ?? 50;
  const resilience = dimensionMap["Resilience"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout strengths
  if (conscientiousness >= 70) {
    strengths.push("Operational Follow-Through: You turn intentions into reliable reality through structured milestones and organizational discipline.");
  }
  if (openness >= 70) {
    strengths.push("Creative & Conceptual Curiosity: High receptivity to new frameworks, unconventional viewpoints, and aesthetic nuance.");
  }
  if (empathy >= 70) {
    strengths.push("Interpersonal Warmth & Attunement: Natural capacity to build relational trust, listen generously, and bridge friction.");
  }
  if (resilience >= 70) {
    strengths.push("Affective Composure: Even-keeled psychological fortitude that bounces back swiftly from setbacks without protracted rumination.");
  }
  if (social >= 70) {
    strengths.push("Social Initiative & Charisma: Energized by group dynamics and comfortable articulating perspectives in public forums.");
  }
  if (strengths.length === 0) {
    strengths.push("Thoughtful Individuality: You make deliberate choices and navigate life with a distinct, unhurried personal cadence.");
  }

  // Growth areas
  if (resilience < 60) {
    growthAreas.push("Stress Vulnerability: A tendency toward anticipatory worry and internalizing perceived failures.");
  }
  if (conscientiousness < 60) {
    growthAreas.push("Execution Consistency: Relying primarily on inspiration rather than structured routines can lead to eleventh-hour pressure.");
  }
  if (openness < 60) {
    growthAreas.push("Routine Rigidity: Occasional discomfort with unexpected novelty or changing procedural parameters.");
  }
  if (empathy < 60) {
    growthAreas.push("Directness vs Sensitivity: High task orientation can occasionally be perceived by others as blunt or detached.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Balancing Output with Recovery: Ensure high conscientious drive does not encroach on essential restorative downtime.");
  }

  // Actionable steps
  actionSteps.push("Leverage your highest trait (" + (Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Core Strength") + ") as a deliberate anchor when making major life or career commitments.");
  actionSteps.push("For traits scoring below 55%, adopt one low-friction micro-habit (e.g. 5 minutes of daily scheduling for conscientiousness, or a weekly novel book for openness).");
  actionSteps.push("Re-evaluate your score periodically as your environment, goals, and responsibilities evolve.");

  return {
    insights: [
      tier.summary,
      `Your predominant dimension is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Openness"
      } (${Math.round(Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[1] || 75)}%), reflecting your natural orientation.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
