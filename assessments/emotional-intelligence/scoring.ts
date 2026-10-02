import { ScoreTier } from "@/types/result";

export const emotionalIntelligenceTiers: ScoreTier[] = [
  {
    id: "exceptional_eq",
    label: "High Emotional Attunement",
    minScore: 80,
    maxScore: 100,
    summary: "You demonstrate acute emotional self-awareness, strong composure under interpersonal friction, and natural empathetic resonance across diverse social contexts.",
    color: "var(--success)",
  },
  {
    id: "strong_eq",
    label: "Balanced Emotional Awareness",
    minScore: 60,
    maxScore: 79,
    summary: "You possess a steady grasp of your emotional reactions and demonstrate reliable empathy and diplomatic communication in most everyday interactions.",
    color: "var(--primary)",
  },
  {
    id: "moderate_eq",
    label: "Developing Interpersonal Awareness",
    minScore: 40,
    maxScore: 59,
    summary: "You navigate familiar emotional settings comfortably, though intense interpersonal pressure or unexpected conflicts can occasionally trigger reactive habits.",
    color: "var(--warning)",
  },
  {
    id: "emerging_eq",
    label: "Emerging Emotional Regulation",
    minScore: 0,
    maxScore: 39,
    summary: "Your responses suggest opportunities to build greater clarity around personal triggers, practice pause-and-reflect techniques, and cultivate deeper active listening.",
    color: "var(--info)",
  },
];
