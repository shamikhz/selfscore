import { ScoreTier } from "@/types/result";

export const confidenceTiers: ScoreTier[] = [
  {
    id: "secure_empowered",
    label: "Secure & Grounded Self-Esteem",
    minScore: 80,
    maxScore: 100,
    summary: "You demonstrate healthy, stable self-belief, robust bounce-back resilience after setbacks, clear assertiveness, and authentic self-acceptance.",
    color: "var(--success)",
  },
  {
    id: "grounded_adaptive",
    label: "Steady & Constructive Confidence",
    minScore: 60,
    maxScore: 79,
    summary: "You possess a dependable foundation of self-worth and assertiveness in familiar settings, with minor vulnerability to comparison or self-criticism during high-stakes moments.",
    color: "var(--primary)",
  },
  {
    id: "developing_situational",
    label: "Developing / Situational Confidence",
    minScore: 40,
    maxScore: 59,
    summary: "Your confidence fluctuates depending on external validation, praise, or environment, indicating opportunities to strengthen your internal anchor and assertiveness.",
    color: "var(--warning)",
  },
  {
    id: "emerging_self_critical",
    label: "Emerging / Self-Critical Pattern",
    minScore: 0,
    maxScore: 39,
    summary: "Your responses suggest an active inner critic, hesitation in speaking up, or persistent self-doubt. Cultivating self-compassion and celebrating micro-wins will build solid ground.",
    color: "var(--info)",
  },
];
