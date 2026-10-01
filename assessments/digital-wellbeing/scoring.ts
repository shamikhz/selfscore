import { ScoreTier } from "@/types/result";

export const digitalWellbeingTiers: ScoreTier[] = [
  {
    id: "digital_mastery",
    label: "Digital Sovereign / Intentional Master",
    minScore: 80,
    maxScore: 100,
    summary: "You wield technology with deliberate intention, robust notification boundaries, protected sleep sanctuaries, and unbroken focus stamina.",
    color: "var(--success)",
  },
  {
    id: "mindful_balanced",
    label: "Mindful User with Occasional Drift",
    minScore: 60,
    maxScore: 79,
    summary: "You maintain healthy general boundaries around screens, though idle moments and high-stimulation algorithms occasionally capture your attention.",
    color: "var(--primary)",
  },
  {
    id: "elevated_fragmentation",
    label: "Elevated Attention Fragmentation",
    minScore: 40,
    maxScore: 59,
    summary: "Frequent notification reactivity, bedtime screen exposure, and algorithmic doomscrolling are actively chipping away at your cognitive focus.",
    color: "var(--warning)",
  },
  {
    id: "digital_overload",
    label: "High Digital Overload / Screen Captivity",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect pervasive screen compulsion, severe focus fragmentation, and compromised sleep caused by omnipresent device interactions.",
    color: "var(--danger)",
  },
];
