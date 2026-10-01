import { ScoreTier } from "@/types/result";

export const riskToleranceTiers: ScoreTier[] = [
  {
    id: "aggressive_enterprising",
    label: "Aggressive / Enterprising Investor",
    minScore: 80,
    maxScore: 100,
    summary: "You possess high stomach for market drawdowns, a multi-decade compounding horizon, low loss aversion, and a sharp appetite for calculated asymmetric opportunities.",
    color: "var(--success)",
  },
  {
    id: "growth_oriented",
    label: "Growth-Oriented / Disciplined Accumulator",
    minScore: 60,
    maxScore: 79,
    summary: "You comfortably embrace market volatility for superior long-term equity returns, utilizing systematic dollar-cost averaging and broad diversification.",
    color: "var(--primary)",
  },
  {
    id: "moderate_balanced",
    label: "Balanced / Moderate Preservation",
    minScore: 40,
    maxScore: 59,
    summary: "You prefer balanced asset allocation (e.g. 60/40 equities/fixed income), balancing growth with clear downside mitigation to maintain emotional peace of mind.",
    color: "var(--warning)",
  },
  {
    id: "conservative_preservation",
    label: "Conservative / Capital Preservation",
    minScore: 0,
    maxScore: 39,
    summary: "Your primary imperative is protecting principal value; market volatility creates intense discomfort, favoring cash reserves, treasury yields, and guaranteed returns.",
    color: "var(--info)",
  },
];
