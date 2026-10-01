import { ScoreTier } from "@/types/result";

export const iqTiers: ScoreTier[] = [
  {
    id: "exceptional",
    label: "Advanced Pattern Synthesizer",
    minScore: 85,
    maxScore: 100,
    summary: "Exceptional visual-spatial agility, multi-rule mental rotation, and analytical sequence deduction.",
    color: "var(--success)",
  },
  {
    id: "strong",
    label: "High Analytical Reasoning",
    minScore: 70,
    maxScore: 84,
    summary: "Consistent logical deduction across structured sequences with strong problem-solving discipline.",
    color: "var(--primary)",
  },
  {
    id: "moderate",
    label: "Balanced Pattern Acuity",
    minScore: 50,
    maxScore: 69,
    summary: "Reliable grasp of standard linear and rotational progressions with growth opportunities in multi-variable abstraction.",
    color: "var(--warning)",
  },
  {
    id: "foundational",
    label: "Foundational Pattern Exploration",
    minScore: 0,
    maxScore: 49,
    summary: "Developing cognitive comfort with complex abstract spatial rules; benefits from deliberate deconstruction methods.",
    color: "var(--info)",
  },
];
