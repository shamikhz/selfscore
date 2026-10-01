import { ScoreTier } from "@/types/result";

export const financialHealthTiers: ScoreTier[] = [
  {
    id: "financial_sovereign",
    label: "Financially Sovereign / High Fortress",
    minScore: 80,
    maxScore: 100,
    summary: "Your financial profile exhibits exceptional budget discipline, a robust multi-month emergency safety runway, zero toxic consumer debt, and automated long-term compounding.",
    color: "var(--success)",
  },
  {
    id: "stable_growing",
    label: "Financially Stable & Building",
    minScore: 60,
    maxScore: 79,
    summary: "You maintain positive cash flow, manageable liabilities, and regular savings habits, with targeted opportunities to expand liquidity reserves and investment automation.",
    color: "var(--primary)",
  },
  {
    id: "vulnerable_cushion",
    label: "Narrow Margin / Elevated Friction",
    minScore: 40,
    maxScore: 59,
    summary: "Limited emergency reserves or persistent credit card balances leave you vulnerable to unexpected life shocks, making cash flow tracking essential.",
    color: "var(--warning)",
  },
  {
    id: "acute_distress",
    label: "Acute Financial Strain / Deficit",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect paycheck-to-paycheck cash flow, heavy consumer debt burdens, and absent reserves, indicating an urgent need for debt triage and spending resets.",
    color: "var(--danger)",
  },
];
