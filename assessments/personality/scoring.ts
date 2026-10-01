import { ScoreTier } from "@/types/result";

export const personalityTiers: ScoreTier[] = [
  {
    id: "integrated_resilient",
    label: "Dynamic / Highly Integrated",
    minScore: 80,
    maxScore: 100,
    summary: "Your personality profile reflects expansive intellectual curiosity, strong conscientious follow-through, prosocial empathy, and exceptional emotional composure.",
    color: "var(--success)",
  },
  {
    id: "balanced_functional",
    label: "Harmonious & Purposeful",
    minScore: 60,
    maxScore: 79,
    summary: "You possess a well-rounded psychological foundation with reliable discipline and warm interpersonal awareness, balanced by steady adaptive coping.",
    color: "var(--primary)",
  },
  {
    id: "emerging_focused",
    label: "Focused / Selective Adaptability",
    minScore: 40,
    maxScore: 59,
    summary: "You exhibit pronounced strengths in specific domains while preferring structured predictability or solitary reserves in others.",
    color: "var(--warning)",
  },
  {
    id: "reflective_individual",
    label: "Deeply Reflective / Specialized",
    minScore: 0,
    maxScore: 39,
    summary: "Responses reflect deeply individualistic preferences with specialized focus, heightened sensitivity, and distinct personal boundaries.",
    color: "var(--info)",
  },
];
