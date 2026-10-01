import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveFinancialHealthInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const budget = dimensionMap["Budget Discipline"] ?? 50;
  const buffer = dimensionMap["Safety Buffer"] ?? 50;
  const debt = dimensionMap["Debt Management"] ?? 50;
  const future = dimensionMap["Future Planning"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (buffer >= 70) {
    strengths.push("Robust Liquid Runway: Multi-month emergency cash shields your household from unexpected career or medical disruptions.");
  }
  if (debt >= 70) {
    strengths.push("Debt Freedom & Low Leverage: Zero high-interest consumer debt frees up substantial monthly cash flow for wealth generation.");
  }
  if (future >= 70) {
    strengths.push("Automated Compounding: Consistent long-term investment contributions harness the power of exponential compounding.");
  }
  if (budget >= 70) {
    strengths.push("Cash Flow Awareness: Disciplined spending below earnings guarantees positive monthly savings margins.");
  }
  if (strengths.length === 0) {
    strengths.push("Honest Diagnostic Foundation: You are confronting financial reality with transparency, which is the vital starting point for wealth building.");
  }

  // Growth areas
  if (buffer < 60) {
    growthAreas.push("Fragile Emergency Cushion: Less than 3 months of liquid reserves leaves you exposed to debt in sudden emergencies.");
  }
  if (debt < 60) {
    growthAreas.push("High-Interest Debt Leakage: Carrying revolving credit balances acts as a severe mathematical drag on net worth.");
  }
  if (future < 60) {
    growthAreas.push("Investment Inaction: Relying purely on cash savings without compounding investments will lead to purchasing power loss via inflation.");
  }
  if (budget < 60) {
    growthAreas.push("Unconscious Outflows: Untracked subscriptions and lifestyle creep eroding the monthly surplus.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Tax & Estate Optimization: Ensure accounts (IRAs, 401ks, HSAs) and beneficiary directives are structured efficiently.");
  }

  // Actionable steps
  actionSteps.push("Automate a dedicated 'Pay Yourself First' transfer on payday directing at least 10–15% directly into high-yield savings or index funds.");
  actionSteps.push("If carrying revolving credit card debt, use the Avalanche method (highest interest rate first) to eliminate interest drag immediately.");
  actionSteps.push("Conduct a 60-minute 'Subscription Audit' to cancel unused streaming, app, or membership recurring charges.");

  return {
    insights: [
      tier.summary,
      `Your strongest financial fortress pillar is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Safety Buffer"
      }, giving you essential peace of mind.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
