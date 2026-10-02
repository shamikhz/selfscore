import { ScoreTier } from "@/types/result";

export const focusAttentionTiers: ScoreTier[] = [
  {
    id: "deep_focus",
    label: "Deep Focus & High Concentration",
    minScore: 80,
    maxScore: 100,
    summary: "You demonstrate exceptional attentional stamina, disciplined environmental control, minimal task switching, and frequent access to productive flow states.",
    color: "var(--success)",
  },
  {
    id: "generally_focused",
    label: "Generally Focused & Mindful",
    minScore: 60,
    maxScore: 79,
    summary: "You maintain solid concentration on core priorities and handle moderate interruptions well, with minor vulnerability to digital pings or mid-afternoon energy dips.",
    color: "var(--primary)",
  },
  {
    id: "situationally_distracted",
    label: "Situationally Distracted",
    minScore: 40,
    maxScore: 59,
    summary: "Your focus fluctuates depending on task novelty or environment, suggesting that implementing structured work blocks and stricter digital barriers will significantly increase output.",
    color: "var(--warning)",
  },
  {
    id: "highly_fragmented",
    label: "Fragmented / Developing Attention",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect frequent task-switching, notification reactivity, and focus friction. Adopting single-tasking routines and physical distraction shields will restore clarity.",
    color: "var(--info)",
  },
];
