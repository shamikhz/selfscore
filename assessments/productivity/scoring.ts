import { ScoreTier } from "@/types/result";

export const productivityTiers: ScoreTier[] = [
  {
    id: "peak_execution",
    label: "High-Leverage Execution Master",
    minScore: 80,
    maxScore: 100,
    summary: "You operate with razor-sharp objective clarity, formidable distraction resistance, robust deep work stamina, and automated system consistency.",
    color: "var(--success)",
  },
  {
    id: "effective_practitioner",
    label: "Effective & Consistent Producer",
    minScore: 60,
    maxScore: 79,
    summary: "You reliably achieve key outcomes and protect deep focus blocks, with targeted opportunities to streamline task backlogs and boundary protection.",
    color: "var(--primary)",
  },
  {
    id: "reactive_scattered",
    label: "Reactive / Intermittent Momentum",
    minScore: 40,
    maxScore: 59,
    summary: "High effort frequently dissipates into reactive communication, micro-distractions, or unfinished projects due to loose system infrastructure.",
    color: "var(--warning)",
  },
  {
    id: "friction_heavy",
    label: "Friction-Heavy / Activity Trap",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect pervasive context switching, unclear daily leverage, and exhaustion without meaningful completion, signaling a need for fundamental habit restructuring.",
    color: "var(--danger)",
  },
];
