import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveProductivityInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const clarity = dimensionMap["Goal Clarity"] ?? 50;
  const distraction = dimensionMap["Distraction Control"] ?? 50;
  const stamina = dimensionMap["Execution Stamina"] ?? 50;
  const systems = dimensionMap["System Consistency"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (clarity >= 70) {
    strengths.push("High Leverage Prioritization: Clear distinction between vanity busywork and needle-moving outcomes.");
  }
  if (stamina >= 70) {
    strengths.push("Deep Work Finishing Power: Ability to sustain intense cognitive focus through the final 15% of execution.");
  }
  if (distraction >= 70) {
    strengths.push("Attention Defense: Strong internal friction tolerance and environmental design shielding your flow.");
  }
  if (systems >= 70) {
    strengths.push("Systemic Architecture: You rely on trusted external tools and weekly review cadences rather than fragile memory.");
  }
  if (strengths.length === 0) {
    strengths.push("Drive for Impact: You possess a genuine desire to maximize your contribution and streamline daily friction.");
  }

  // Growth areas
  if (clarity < 60) {
    growthAreas.push("The Activity Trap: Working hard all day without progressing your top strategic objectives.");
  }
  if (distraction < 60) {
    growthAreas.push("Impulsive Task-Switching: Escaping mental difficulty by immediately opening email, chat, or social tabs.");
  }
  if (stamina < 60) {
    growthAreas.push("The Finishing Deficit: High initial project enthusiasm that peters out before final polish and delivery.");
  }
  if (systems < 60) {
    growthAreas.push("System Drift: Inconsistent planning cadences leading to cluttered inboxes and cognitive overwhelm.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Energy Pacing: Ensure maximum deep work blocks do not exceed 4 daily hours to prevent burnout.");
  }

  // Actionable steps
  actionSteps.push("Every afternoon before logging off, identify your 'Single Must-Win Task' for tomorrow and place it on a sticky note.");
  actionSteps.push("Work in 50-minute focused sprints with full-screen mode, followed by 10 minutes of screen-free movement.");
  actionSteps.push("Schedule a recurring 30-minute Friday afternoon review to clear task backlogs and map next week's milestones.");

  return {
    insights: [
      tier.summary,
      `Your strongest operational pillar is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Goal Clarity"
      }, which empowers your daily momentum.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
