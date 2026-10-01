import { ScoreTier } from "@/types/result";

export const timeManagementTiers: ScoreTier[] = [
  {
    id: "time_mastery",
    label: "Time Sovereign / High Calibration",
    minScore: 80,
    maxScore: 100,
    summary: "You design your calendar with spacious buffers, accurate timeline forecasts, decisive task initiation, and unwavering priority protection.",
    color: "var(--success)",
  },
  {
    id: "steady_pacer",
    label: "Steady Pacer with Occasional Crunch",
    minScore: 60,
    maxScore: 79,
    summary: "You navigate daily demands with solid punctuality and milestone tracking, though occasional over-commitment or optimistic planning creates brief crunches.",
    color: "var(--primary)",
  },
  {
    id: "reactive_compressed",
    label: "Compressed / Margin Deficit",
    minScore: 40,
    maxScore: 59,
    summary: "Back-to-back scheduling, task initiation friction, and chronic timeline underestimation frequently leave you operating in frantic catch-up mode.",
    color: "var(--warning)",
  },
  {
    id: "chronic_urgency",
    label: "Chronic Urgency / Schedule Collapse",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect pervasive calendar overcrowding, severe procrastination avoidance, and fragile zero-buffer cascades that derail commitments.",
    color: "var(--danger)",
  },
];
