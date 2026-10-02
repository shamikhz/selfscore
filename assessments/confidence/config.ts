import { AssessmentDefinition } from "@/types/assessment";
import { confidenceQuestions } from "./questions";
import { confidenceTiers } from "./scoring";
import { resolveConfidenceInsights } from "./insights";

export const confidenceAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "confidence",
    slug: "confidence",
    title: "Confidence & Self-Esteem Indicator",
    shortDescription: "Evaluate self-belief, assertiveness, resilience, and inner self-acceptance.",
    description: "Explore your natural confidence patterns, how you handle mistakes, assert personal boundaries, and build resilient self-worth across everyday situations.",
    category: "mind",
    estimatedDuration: "5–6 min",
    questionCount: 20,
    featured: false,
    popular: true,
    dimensions: [
      "Self-Belief",
      "Assertiveness",
      "Self-Acceptance",
      "Resilience",
      "Social Confidence",
    ],
    disclaimer: "This informal self-assessment is designed for personal insight and reflection. It is not a clinical psychological or psychiatric evaluation.",
    relatedAssessments: ["personality", "communication", "career-interest"],
  },
  questions: confidenceQuestions,
  tiers: confidenceTiers,
  resolveInsights: resolveConfidenceInsights,
};
