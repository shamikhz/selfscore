import { ScoreTier } from "@/types/result";

export const careerInterestTiers: ScoreTier[] = [
  {
    id: "high_clarity",
    label: "High Clarity & Strong Mission Driver",
    minScore: 80,
    maxScore: 100,
    summary: "Your career motivations demonstrate sharply defined strengths, passionate domain preferences, and a clear vision for where your energy creates maximum value.",
    color: "var(--success)",
  },
  {
    id: "versatile_contributor",
    label: "Multifaceted & Adaptable Contributor",
    minScore: 60,
    maxScore: 79,
    summary: "You hold a versatile hybrid profile capable of bridging analytical rigor, team leadership, or creative ideation across dynamic work environments.",
    color: "var(--primary)",
  },
  {
    id: "cross_disciplinary",
    label: "Cross-Disciplinary & Evolving Focus",
    minScore: 40,
    maxScore: 59,
    summary: "Your professional interests are evenly distributed across diverse domains, suggesting opportunities to specialize or craft hybrid 'T-shaped' career pathways.",
    color: "var(--warning)",
  },
  {
    id: "broad_exploratory",
    label: "Broadly Exploratory / Pivot Ready",
    minScore: 0,
    maxScore: 39,
    summary: "Your responses reflect an exploratory phase where traditional corporate paths may not fully resonate, highlighting a prime opportunity to experiment with diverse projects.",
    color: "var(--accent)",
  },
];
