import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveSpendingHabitsInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const impulse = dimensionMap["Impulse Control"] ?? 50;
  const value = dimensionMap["Value Alignment"] ?? 50;
  const comparison = dimensionMap["Comparison Shopping"] ?? 50;
  const emotional = dimensionMap["Emotional Spending"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (impulse >= 70) {
    strengths.push("High Impulse Friction: You pause and implement effective delay cooling periods before non-essential purchases.");
  }
  if (value >= 70) {
    strengths.push("Internal Value Alignment: You purchase based on genuine utility and durability rather than external status signaling.");
  }
  if (comparison >= 70) {
    strengths.push("Diligence & Total Cost Awareness: You calculate labor-hour equivalents and compare lifecycle costs before buying.");
  }
  if (emotional >= 70) {
    strengths.push("Emotional Detachment: You decouple bad moods, stress, and boredom from your wallet, avoiding retail therapy traps.");
  }
  if (strengths.length === 0) {
    strengths.push("Diagnostic Clarity: Recognizing emotional and situational spending triggers is the prerequisite for intentional consumption.");
  }

  // Growth areas
  if (impulse < 60) {
    growthAreas.push("Frictionless One-Click Vulnerability: Saved card autofills and shopping notifications easily override cognitive willpower.");
  }
  if (emotional < 60) {
    growthAreas.push("Retail Therapy Reflex: Turning to online checkouts as an emotional anesthetic during stress or boredom.");
  }
  if (comparison < 60) {
    growthAreas.push("Impatience & Marketing Pressure: Susceptibility to artificial urgency, countdown timers, and unresearched purchases.");
  }
  if (value < 60) {
    growthAreas.push("Status & Social Pressure Spending: Outflows swayed by peer comparison rather than personal life priorities.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Subscription & Recurring Drift: Regularly verify that automatic renewals still deliver proportionate happiness.");
  }

  // Actionable steps
  actionSteps.push("Institute a strict 72-hour 'Cooling Off' rule: bookmark non-essential items in a wishlist instead of buying immediately.");
  actionSteps.push("Remove saved credit cards from your browser and smartphone autofill to re-introduce deliberate physical friction.");
  actionSteps.push("Calculate the labor trade-off for discretionary buys: divide the price tag by your hourly net earnings before clicking buy.");

  return {
    insights: [
      tier.summary,
      `Your strongest consumer habit dimension is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Value Alignment"
      }, anchoring your spending discipline.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
