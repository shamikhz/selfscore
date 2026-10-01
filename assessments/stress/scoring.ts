import { ScoreTier } from "@/types/result";

export const stressTiers: ScoreTier[] = [
  {
    id: "high_equilibrium",
    label: "Optimal Equilibrium & Resilience",
    minScore: 80,
    maxScore: 100,
    summary: "Your responses reflect robust psychological and somatic resilience, clear boundary protection, and consistent daily recovery margins.",
    color: "var(--success)",
  },
  {
    id: "moderate_equilibrium",
    label: "Manageable Load with Transient Strain",
    minScore: 60,
    maxScore: 79,
    summary: "You manage daily responsibilities with functional stamina, though occasional situational peaks create noticeable physical or cognitive tension.",
    color: "var(--primary)",
  },
  {
    id: "elevated_stress",
    label: "Elevated Load & Narrowing Buffer",
    minScore: 40,
    maxScore: 59,
    summary: "Your energy output currently outpaces your restorative renewal, causing persistent cognitive friction, muscle tension, or emotional reactivity.",
    color: "var(--warning)",
  },
  {
    id: "high_strain",
    label: "Heavy Strain / Depleted Reserves",
    minScore: 0,
    maxScore: 39,
    summary: "Responses indicate significant accumulated pressure across cognitive, physical, and emotional domains, signaling an urgent need for intentional decompression.",
    color: "var(--danger)",
  },
];
