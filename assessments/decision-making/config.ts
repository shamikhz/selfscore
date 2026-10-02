import { AssessmentDefinition } from "@/types/assessment";
import { decisionMakingQuestions } from "./questions";
import { decisionMakingTiers } from "./scoring";
import { resolveDecisionMakingInsights } from "./insights";

export const decisionMakingAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "decision-making",
    slug: "decision-making",
    title: "Decision-Making Style Score",
    shortDescription: "Understand your approach to risk, analytical reasoning, and decisive execution.",
    description: "Examine how you gather evidence, balance analytical thinking with intuitive pattern matching, evaluate risk, and commit under uncertainty.",
    category: "mind",
    estimatedDuration: "5–6 min",
    questionCount: 20,
    featured: false,
    popular: true,
    dimensions: [
      "Analytical Thinking",
      "Decisiveness",
      "Risk Awareness",
      "Intuition",
      "Reflection",
    ],
    disclaimer: "This assessment reflects personal decision-making preferences and cognitive styles. It is not an aptitude test or psychological evaluation.",
    relatedAssessments: ["risk-tolerance", "productivity", "goal-achievement"],
  },
  questions: decisionMakingQuestions,
  tiers: decisionMakingTiers,
  resolveInsights: resolveDecisionMakingInsights,
};
