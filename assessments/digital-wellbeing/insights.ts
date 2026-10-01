import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveDigitalWellbeingInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const notifications = dimensionMap["Notification Resilience"] ?? 50;
  const intentionality = dimensionMap["Intentional Usage"] ?? 50;
  const bedtime = dimensionMap["Bedtime Disconnect"] ?? 50;
  const focus = dimensionMap["Focus Protection"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (focus >= 70) {
    strengths.push("Deep Focus Endurance: You can hold undivided attention on complex intellectual tasks without impulsive tab-switching.");
  }
  if (bedtime >= 70) {
    strengths.push("Protected Rest Sanctuary: Clear physical boundaries between your bed and digital screens preserve sleep quality.");
  }
  if (notifications >= 70) {
    strengths.push("Notification Immunity: You treat incoming alerts as asynchronous requests rather than immediate emergencies.");
  }
  if (intentionality >= 70) {
    strengths.push("Conscious Utility Consumption: You access apps for deliberate utility rather than passive dopamine loops.");
  }
  if (strengths.length === 0) {
    strengths.push("Honest Reflection: You recognize the digital friction points affecting your daily peace and attention.");
  }

  // Growth areas
  if (notifications < 60) {
    growthAreas.push("Alert Hyper-Vigilance: Constant chimes and buzzes keep your brain in an alert, fragmented state.");
  }
  if (bedtime < 60) {
    growthAreas.push("Bedtime Screen Exposure: Scrolling in bed suppresses melatonin and delays high-quality restorative sleep.");
  }
  if (intentionality < 60) {
    growthAreas.push("Mindless Rabbit Holes: Opening devices without explicit purpose leads to lost hours and mental fatigue.");
  }
  if (focus < 60) {
    growthAreas.push("Fractured Working Memory: Rapid context switching prevents you from reaching sustained flow states.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Long-term Media Diet: Periodically curate feeds to ensure incoming information remains genuinely uplifting.");
  }

  // Actionable steps
  actionSteps.push("Turn off all banner notifications and badges for social media, entertainment, and non-essential messaging apps.");
  actionSteps.push("Buy a standalone alarm clock and charge your phone overnight outside your bedroom.");
  actionSteps.push("Practice 60 minutes of daily 'Airplane Mode' during your most demanding morning cognitive task.");

  return {
    insights: [
      tier.summary,
      `Your strongest digital boundary is in ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Focus Protection"
      }, which provides a steady bulwark for your cognitive autonomy.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
