import { ScoreTier } from "@/types/result";

export const burnoutRiskTiers: ScoreTier[] = [
  {
    id: "lower_pattern",
    label: "Lower Pattern (Healthy Margin)",
    minScore: 0,
    maxScore: 34,
    summary: "Your responses suggest solid energy levels, proactive recovery routines, and healthy boundaries that effectively protect your mental and physical reserves.",
    color: "var(--success)",
  },
  {
    id: "moderate_pattern",
    label: "Moderate Pattern (Manageable Load)",
    minScore: 35,
    maxScore: 59,
    summary: "You manage daily demands reasonably well, though intermittent workload crunches or occasional blurred work-life boundaries place pressure on your recovery windows.",
    color: "var(--primary)",
  },
  {
    id: "elevated_pattern",
    label: "Elevated Pattern (Compressed Recovery)",
    minScore: 60,
    maxScore: 79,
    summary: "Your answers indicate sustained workload pressure, noticeable emotional fatigue, and reduced downtime, suggesting that intentional pacing and firmer boundaries are needed.",
    color: "var(--warning)",
  },
  {
    id: "higher_pattern",
    label: "Higher Pattern (Substantial Load)",
    minScore: 80,
    maxScore: 100,
    summary: "Responses reflect substantial cumulative exhaustion, persistent boundary strain, and reduced motivation. Prioritizing structured rest, workload adjustments, and support is highly recommended.",
    color: "var(--danger)",
  },
];
