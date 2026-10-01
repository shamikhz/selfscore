import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveTimeManagementInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const priorities = dimensionMap["Priority Setting"] ?? 50;
  const procrastination = dimensionMap["Procrastination Shield"] ?? 50;
  const estimation = dimensionMap["Time Estimation"] ?? 50;
  const buffers = dimensionMap["Buffer Discipline"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (buffers >= 70) {
    strengths.push("Elastic Buffer Architecture: You protect white space and transition margins, preventing schedule domino collapses.");
  }
  if (priorities >= 70) {
    strengths.push("Quadrant II Discipline: You deliberately invest hours in strategic, non-urgent growth rather than merely putting out fires.");
  }
  if (procrastination >= 70) {
    strengths.push("Rapid Activation Energy: You initiate challenging assignments without protracted avoidance dread.");
  }
  if (estimation >= 70) {
    strengths.push("Calibrated Forecasting: Accurate timeline predictions prevent catastrophic overpromising and crunch periods.");
  }
  if (strengths.length === 0) {
    strengths.push("Schedule Awareness: You candidly recognize the friction points in your current workflow and are ready to reclaim your hours.");
  }

  // Growth areas
  if (buffers < 60) {
    growthAreas.push("Zero-Buffer Fragility: Back-to-back blocks mean any minor delay cascades into full schedule derailment.");
  }
  if (estimation < 60) {
    growthAreas.push("Planning Fallacy: Consistently underestimating task complexity leads to rushed deliverables and late nights.");
  }
  if (procrastination < 60) {
    growthAreas.push("Avoidance Delays: Lingering over easy busywork to avoid starting the ambiguous core deliverable.");
  }
  if (priorities < 60) {
    growthAreas.push("Urgency Trap: Allowing incoming pings and other people's emergencies to dictate your daily calendar.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Long-Horizon Pacing: Maintain seasonal pacing to ensure steady output over multi-month marathons.");
  }

  // Actionable steps
  actionSteps.push("Mandate a 15-minute 'Speedy Meeting' rule: make 30-minute meetings 25 minutes and 60-minute meetings 45 minutes to build automatic buffers.");
  actionSteps.push("When estimating a complex project, multiply your first instinctive time forecast by 1.5 to calibrate for hidden friction.");
  actionSteps.push("Use the '5-Minute Shrink Rule' on daunting tasks: commit to working for only 5 minutes with full permission to stop afterwards.");

  return {
    insights: [
      tier.summary,
      `Your strongest pacing asset is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Priority Setting"
      }, giving you a reliable compass for daily decisions.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
