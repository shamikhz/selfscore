import { ScoreTier } from "@/types/result";

export const learningStyleTiers: ScoreTier[] = [
  {
    id: "polymathic_synthesizer",
    label: "Multimodal / Agile Synthesizer",
    minScore: 80,
    maxScore: 100,
    summary: "You seamlessly traverse multiple cognitive learning modes: translating abstract theoretical frameworks into spatial mental models, rapid applied prototypes, and articulate dialogue.",
    color: "var(--success)",
  },
  {
    id: "balanced_learner",
    label: "Balanced Applied Learner",
    minScore: 60,
    maxScore: 79,
    summary: "You absorb complex information effectively across hands-on trial and visual structure, with clear preferences that accelerate your personal study speed.",
    color: "var(--primary)",
  },
  {
    id: "specialized_mode",
    label: "Distinct Modal Specialist",
    minScore: 40,
    maxScore: 59,
    summary: "You operate with a pronounced preference for one primary learning modality, achieving rapid mastery when material is presented in your optimal format.",
    color: "var(--warning)",
  },
  {
    id: "exploratory_mode",
    label: "Emerging / Exploratory Learner",
    minScore: 0,
    maxScore: 39,
    summary: "You are identifying your personal study mechanisms; adopting deliberate visual and hands-on habits will unlock significant gains in comprehension and retention.",
    color: "var(--info)",
  },
];
