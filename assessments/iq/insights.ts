import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveIqInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const visual = dimensionMap["Visual Logic"] ?? 50;
  const sequence = dimensionMap["Sequence Analysis"] ?? 50;
  const spatial = dimensionMap["Spatial Deduction"] ?? 50;
  const speed = dimensionMap["Cognitive Speed"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Evaluate strengths
  if (visual >= 75) {
    strengths.push("High visual discrimination: You quickly spot micro-variations and symmetry patterns in complex diagrams.");
  } else if (visual >= 55) {
    strengths.push("Sound visual recognition: Capable of tracking alternating geometric rhythms under normal conditions.");
  }

  if (sequence >= 75) {
    strengths.push("Mathematical and sequential fluency: You anticipate iterative progressions and formulaic patterns naturally.");
  }

  if (spatial >= 75) {
    strengths.push("3D spatial rotation: Strong ability to mentally fold, flip, and mirror multidimensional objects without disorientation.");
  }

  if (speed >= 75) {
    strengths.push("Working memory stamina: You retain and manipulate multiple interdependent rules under cognitive load.");
  }

  // Fallback strength if needed
  if (strengths.length === 0) {
    strengths.push("Foundational problem-solving awareness: You approach complex logical questions with deliberation and patience.");
  }

  // Evaluate growth areas
  if (spatial < 65) {
    growthAreas.push("Spatial transformation: Mental rotations and perspective folding benefit from physical sketching or visual aids.");
  }

  if (speed < 65) {
    growthAreas.push("Multi-rule working memory: When multiple abstract conditions compete, breaking them into sequential checkpoints prevents fatigue.");
  }

  if (sequence < 60) {
    growthAreas.push("Non-linear sequences: Spotting interleaved and exponential mathematical intervals requires deliberate formula practice.");
  }

  // Fallback growth area
  if (growthAreas.length === 0) {
    growthAreas.push("Advanced constraint optimization: Test your limits against timed, high-density symbolic reasoning exercises.");
  }

  // Concrete action steps
  actionSteps.push("Engage in deliberate visual puzzle deconstruction (e.g. origami, chess tactics, or nonograms) 10 minutes twice weekly.");
  actionSteps.push("When tackling complex multi-variable problems, isolate the single constant factor before tracking moving variables.");
  actionSteps.push("Practice rapid mental arithmetic or interleaved sequence tracking to expand immediate working memory capacity.");

  return {
    insights: [
      tier.summary,
      `Your strongest dimension is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Visual Logic"
      }, demonstrating clear intuitive affinity.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
