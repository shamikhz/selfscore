import { ScoreTier } from "@/types/result";

export const relationshipTiers: ScoreTier[] = [
  {
    id: "deeply_harmonious",
    label: "Deeply Harmonious & Flourishing",
    minScore: 80,
    maxScore: 100,
    summary: "Your relationship reflects high emotional attunement, fast and mature conflict repair, deeply aligned long-term values, and active mutual support for each other's growth.",
    color: "var(--success)",
  },
  {
    id: "secure_partnership",
    label: "Solid & Secure Partnership",
    minScore: 60,
    maxScore: 79,
    summary: "You maintain a strong, loving foundation with dependable trust, with targeted opportunities to deepen intentional connection rituals and sharpen conflict resolution.",
    color: "var(--primary)",
  },
  {
    id: "moderate_friction",
    label: "Moderate Friction & Avoidance",
    minScore: 40,
    maxScore: 59,
    summary: "Patterns of unresolved misunderstandings, unexpressed needs, or differing life priorities generate friction, calling for honest, compassionate alignment conversations.",
    color: "var(--warning)",
  },
  {
    id: "significant_disconnect",
    label: "Significant Disconnect & Relational Strain",
    minScore: 0,
    maxScore: 39,
    summary: "Responses indicate frequent stonewalling, unaddressed resentment, or fundamental value divergence, signaling an urgent need for intentional reconnection or couples guidance.",
    color: "var(--danger)",
  },
];
