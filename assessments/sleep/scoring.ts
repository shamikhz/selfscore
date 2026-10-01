import { ScoreTier } from "@/types/result";

export const sleepTiers: ScoreTier[] = [
  {
    id: "restorative",
    label: "Optimal Restorative Sleep",
    minScore: 80,
    maxScore: 100,
    summary: "Your sleep architecture shows consistent circadian alignment, structured evening wind-down, deep continuity, and vibrant daytime alertness.",
    color: "var(--success)",
  },
  {
    id: "functional",
    label: "Functional Sleep with Minor Drift",
    minScore: 60,
    maxScore: 79,
    summary: "You achieve dependable baseline recovery, though occasional late screen exposure, inconsistent weekend sleep hours, or afternoon energy dips surface.",
    color: "var(--primary)",
  },
  {
    id: "suboptimal",
    label: "Suboptimal / Elevated Sleep Debt",
    minScore: 40,
    maxScore: 59,
    summary: "Regular sleep fragmentation, pre-bed cognitive arousal, or circadian irregularity prevent your body from achieving deep restorative cycles.",
    color: "var(--warning)",
  },
  {
    id: "compromised",
    label: "Chronically Compromised Sleep",
    minScore: 0,
    maxScore: 39,
    summary: "Severe deficits across timing regularity, continuity, and daytime alertness indicate heavy accumulated sleep debt and compromised recovery.",
    color: "var(--danger)",
  },
];
