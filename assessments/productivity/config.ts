import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { productivityQuestions } from "./questions";
import { productivityTiers } from "./scoring";
import { resolveProductivityInsights } from "./insights";

const baseMeta = getAssessmentBySlug("productivity")!;

export const productivityAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: productivityQuestions.length,
  },
  questions: productivityQuestions,
  tiers: productivityTiers,
  resolveInsights: resolveProductivityInsights,
};
