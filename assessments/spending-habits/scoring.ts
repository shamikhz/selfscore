import { ScoreTier } from "@/types/result";

export const spendingHabitsTiers: ScoreTier[] = [
  {
    id: "mindful_aligned",
    label: "Mindful & Value-Aligned Spender",
    minScore: 80,
    maxScore: 100,
    summary: "Your spending reflects exceptional emotional detachment from consumer impulse, deep value alignment, and rigorous pre-purchase intentionality.",
    color: "var(--success)",
  },
  {
    id: "balanced_consumer",
    label: "Balanced & Discerning Consumer",
    minScore: 60,
    maxScore: 79,
    summary: "You maintain conscious spending control in most life domains, with occasional minor impulse purchases or convenience leaks that are easily managed.",
    color: "var(--primary)",
  },
  {
    id: "friction_leaks",
    label: "Vulnerable to Impulse & Friction Leaks",
    minScore: 40,
    maxScore: 59,
    summary: "Frequent flash sales, retail therapy reflexes, or lifestyle creep create measurable financial drag, pointing to a need for environmental friction.",
    color: "var(--warning)",
  },
  {
    id: "compulsive_strain",
    label: "Compulsive & Emotion-Driven Spending",
    minScore: 0,
    maxScore: 39,
    summary: "Spending patterns are heavily driven by emotional triggers, stress compensation, or instant gratification, often followed by remorse or financial secrecy.",
    color: "var(--danger)",
  },
];
