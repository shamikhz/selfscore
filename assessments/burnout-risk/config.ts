import { AssessmentDefinition } from "@/types/assessment";
import { burnoutRiskQuestions } from "./questions";
import { burnoutRiskTiers } from "./scoring";
import { resolveBurnoutRiskInsights } from "./insights";

export const burnoutRiskAssessmentDefinition: AssessmentDefinition = {
  meta: {
    id: "burnout-risk",
    slug: "burnout-risk",
    title: "Burnout Risk & Energy Indicator",
    shortDescription: "Estimate workload pressure, recovery margins, exhaustion patterns, and boundaries.",
    description: "An informal check-in on perceived workload strain, restorative sleep and recovery habits, energy replenishment, and personal boundary balance.",
    category: "wellbeing",
    estimatedDuration: "4–6 min",
    questionCount: 20,
    featured: false,
    popular: true,
    dimensions: [
      "Energy & Exhaustion",
      "Workload Pressure",
      "Recovery",
      "Boundaries",
      "Motivation",
    ],
    disclaimer: "This is an informal self-reflection tool, not a medical or clinical diagnosis. If you are experiencing severe or chronic exhaustion, please consult a qualified healthcare provider.",
    relatedAssessments: ["stress", "sleep", "digital-wellbeing"],
  },
  questions: burnoutRiskQuestions,
  tiers: burnoutRiskTiers,
  resolveInsights: resolveBurnoutRiskInsights,
};
