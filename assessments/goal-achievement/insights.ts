import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveGoalAchievementInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const clarity = dimensionMap["Goal Clarity"] ?? 50;
  const planning = dimensionMap["Planning"] ?? 50;
  const consistency = dimensionMap["Consistency"] ?? 50;
  const execution = dimensionMap["Execution"] ?? 50;
  const followThrough = dimensionMap["Follow-Through"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths
  if (clarity >= 70) {
    strengths.push("Unambiguous Target Vision: You articulate specific, measurable milestones and filter out irrelevant distractions.");
  }
  if (planning >= 70) {
    strengths.push("Tactical Roadmap Architecture: You break massive multi-month initiatives into pragmatic weekly and daily sprints.");
  }
  if (consistency >= 70) {
    strengths.push("Compound Habit Momentum: You maintain steady operational output regardless of fluctuating daily mood or motivation.");
  }
  if (execution >= 70) {
    strengths.push("High-Impact Focus: You prioritize high-leverage activities and refuse to hide in unproductive busywork.");
  }
  if (followThrough >= 70) {
    strengths.push("Last-Mile Completion Stamina: You push projects through tedious final review stages and achieve tangible closure.");
  }
  if (strengths.length === 0) {
    strengths.push("Inspirational Vision: You bring high enthusiasm, creative ideas, and optimistic ambition to new ventures.");
  }

  // Focus / Growth Areas
  if (followThrough < 60) {
    growthAreas.push("The 'Final 10%' Barrier: Losing interest when a project is 90% done and abandoning it to start a new idea.");
  }
  if (consistency < 60) {
    growthAreas.push("Motivation Dependency: Operating in bursts of extreme effort followed by long periods of stalled progress.");
  }
  if (planning < 60) {
    growthAreas.push("Underestimating Time & Friction: Setting overly optimistic deadlines without factoring in inevitable operational buffers.");
  }
  if (clarity < 60) {
    growthAreas.push("Diffused Ambition: Pursuing too many competing goals simultaneously, diluting energy and output.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Strategic Rest & Celebration: Pausing to consolidate gains and celebrate completions before launching into the next sprint.");
  }

  // Action Steps
  actionSteps.push("Enforce the 'Rule of 3': choose only 3 primary quarterly goals, and place all other exciting ideas into a 'Later' backlog.");
  actionSteps.push("Implement the 'Never Miss Twice' principle for daily goal habits: missing one day happens, but never allow two missed days in a row.");
  actionSteps.push("Conduct a 15-minute 'Sunday Weekly Review': evaluate what milestones moved forward last week and schedule exact calendar slots for next week's core deliverables.");

  const topDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your strongest operational pillar is ${topDimension?.[0] || "Goal Clarity"} (${Math.round(
        topDimension?.[1] || 75
      )}%), driving your goal execution engine.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
