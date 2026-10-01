import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveRelationshipInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const attunement = dimensionMap["Emotional Attunement"] ?? 50;
  const conflict = dimensionMap["Constructive Conflict"] ?? 50;
  const values = dimensionMap["Shared Values"] ?? 50;
  const growth = dimensionMap["Mutual Growth"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (attunement >= 70) {
    strengths.push("Deep Emotional Attunement: You consistently turn toward connection bids, celebrate partner victories, and offer vulnerable presence.");
  }
  if (conflict >= 70) {
    strengths.push("Constructive Conflict & Fast Repair: You tackle specific issues without character assassination or stonewalling, offering sincere repair attempts.");
  }
  if (values >= 70) {
    strengths.push("Harmonious Core Values: Mutual agreement on lifestyle, finances, integrity, and future horizons creates a rock-solid anchor.");
  }
  if (growth >= 70) {
    strengths.push("Mutual Empowerment: You encourage each other's individual passions and thrive on seeing your partner succeed.");
  }
  if (strengths.length === 0) {
    strengths.push("Commitment to Honest Reflection: Evaluating connection dynamics honestly is the crucial foundation for deeper intimacy.");
  }

  // Growth areas
  if (conflict < 60) {
    growthAreas.push("Unresolved Argument Hangover: Allowing disagreements to linger in cold silence rather than initiating quick repair attempts.");
  }
  if (attunement < 60) {
    growthAreas.push("Distracted Connection: Routine and screen habits interrupting daily moments of genuine emotional eye contact and listening.");
  }
  if (values < 60) {
    growthAreas.push("Unspoken Value Disconnects: Avoided conversations around money, long-term geography, or lifestyle pacing building latent friction.");
  }
  if (growth < 60) {
    growthAreas.push("Enmeshment vs Stagnation: Forgetting to nurture independent personal growth and celebrate each other's individual dreams.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Connection Ritual Protection: Guarding shared weekly date nights or morning coffee check-ins against busy calendar creep.");
  }

  // Actionable steps
  actionSteps.push("Schedule a weekly 20-minute 'State of the Union' check-in: share 2 things you appreciated about each other and 1 gentle adjustment for the week.");
  actionSteps.push("When tension escalates during an argument, call a structured 20-minute timeout to let heart rates normalize before resuming.");
  actionSteps.push("Practice the 'Turn Toward' habit: when your partner makes an observation or gesture, pause what you are doing and make eye contact.");

  return {
    insights: [
      tier.summary,
      `Your strongest relational pillar is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Shared Values"
      }, which provides a steady anchor through life's storms.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
