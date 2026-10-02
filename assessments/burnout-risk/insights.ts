import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveBurnoutRiskInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const energy = dimensionMap["Energy & Exhaustion"] ?? 50;
  const workload = dimensionMap["Workload Pressure"] ?? 50;
  const recovery = dimensionMap["Recovery"] ?? 50;
  const boundaries = dimensionMap["Boundaries"] ?? 50;
  const motivation = dimensionMap["Motivation"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths (Note: Lower scores in exhaustion/workload or well-managed dimensions indicate strength)
  if (boundaries <= 40) {
    strengths.push("Firm Boundary Discipline: You protect personal downtime and resist the pressure to remain perpetually connected.");
  }
  if (recovery <= 40) {
    strengths.push("Effective Restoration Habits: You maintain reliable non-work outlets and intentional routines that restore your mental clarity.");
  }
  if (energy <= 40) {
    strengths.push("Stable Vitality: You maintain resilient baseline energy and experience restorative sleep patterns.");
  }
  if (motivation <= 40) {
    strengths.push("Intrinsic Engagement: You retain genuine curiosity and personal meaning in your day-to-day pursuits.");
  }
  if (strengths.length === 0) {
    strengths.push("Dedication & Commitment: You demonstrate strong drive and high responsibility toward your projects and teams.");
  }

  // Focus / Growth Areas
  if (energy >= 60) {
    growthAreas.push("Physical & Cognitive Fatigue: Persistent depleted energy at the end of days that requires deliberate pacing.");
  }
  if (boundaries >= 60) {
    growthAreas.push("Permeable Work Boundaries: Difficulty disconnecting from after-hours pings or feeling compelled to say yes to every request.");
  }
  if (workload >= 60) {
    growthAreas.push("Sustained Volume Pressure: Operating close to maximum bandwidth without scheduled buffer blocks for unexpected tasks.");
  }
  if (motivation >= 60) {
    growthAreas.push("Detachment & Cynicism: Growing feelings of emotional numbness or reduced satisfaction with daily accomplishments.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Long-Term Pacing: Ensuring current comfortable routines remain resilient during future unexpected project sprints.");
  }

  // Action Steps (Non-medical, practical, supportive)
  actionSteps.push("Schedule a non-negotiable 'Hard Stop' daily: shut your work computer and mute work notifications at a set time every evening.");
  actionSteps.push("Incorporate two 10-minute 'Micro-Rest' windows during your workday without screens (walk outside, stretch, or quiet breathing).");
  actionSteps.push("Conduct a weekly workload audit: identify 1–2 low-impact tasks that can be delegated, streamlined, or politely declined.");
  actionSteps.push("If persistent exhaustion impacts your daily wellbeing, consider discussing your stress levels with a supportive mentor or qualified healthcare professional.");

  const highestStressDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your highest pattern indicator is ${highestStressDimension?.[0] || "Workload Pressure"} (${Math.round(
        highestStressDimension?.[1] || 60
      )}%), indicating where setting supportive boundaries will yield the fastest relief.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
