import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveRiskToleranceInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const lossAversion = dimensionMap["Loss Aversion"] ?? 50;
  const volatility = dimensionMap["Volatility Comfort"] ?? 50;
  const horizon = dimensionMap["Time Horizon"] ?? 50;
  const calculatedRisk = dimensionMap["Calculated Risk Taking"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (horizon >= 70) {
    strengths.push("Decade-Scale Horizon: An expansive compounding runway allows you to ignore cyclical economic drawdowns.");
  }
  if (volatility >= 70) {
    strengths.push("Stomach for Market Drawdowns: You view red market days as routine turbulence or discount accumulation opportunities.");
  }
  if (lossAversion >= 70) {
    strengths.push("Rational Expected Value Focus: You evaluate risk objectively based on odds rather than emotional fear of temporary loss.");
  }
  if (calculatedRisk >= 70) {
    strengths.push("Asymmetric Thinking: Comfortable allocating calculated stakes toward high-upside entrepreneurial ventures.");
  }
  if (strengths.length === 0) {
    strengths.push("Prudent Caution: High caution protects you from speculative bubbles, leverage traps, and get-rich-quick schemes.");
  }

  // Growth areas
  if (volatility < 55) {
    growthAreas.push("Paper Loss Discomfort: High emotional stress during regular 10–20% market corrections can tempt emotional capitulation.");
  }
  if (horizon < 55) {
    growthAreas.push("Short Time Horizon Pressure: Approaching liquidity needs in the near term requires shifting toward stable cash or bonds.");
  }
  if (lossAversion < 55) {
    growthAreas.push("Hyper-Loss Aversion: Over-indexing on preventing loss may lead to holding excessive cash that erodes in purchasing power.");
  }
  if (calculatedRisk < 55) {
    growthAreas.push("Conservative Inertia: Extreme risk avoidance limits exposure to transformative career pivots and compounding equities.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Risk Capacity Alignment: Ensure high psychological risk tolerance does not outpace your practical liquid reserves.");
  }

  // Actionable steps
  actionSteps.push("Align your asset allocation with your true comfort tier (e.g. 80/20 for aggressive growth vs 60/40 for balanced preservation).");
  actionSteps.push("Write an 'Investor Policy Statement' specifying that you will never sell equity holdings during a market correction.");
  actionSteps.push("Maintain a 6-month liquid cash cushion completely separated from risk assets to ensure you never sell at a market bottom.");

  return {
    insights: [
      tier.summary,
      `Your strongest risk asset is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Time Horizon"
      }, which provides structural support for your investment strategy.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
