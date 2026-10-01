import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { learningStyleQuestions } from "./questions";
import { learningStyleTiers } from "./scoring";
import { resolveLearningStyleInsights } from "./insights";

const baseMeta = getAssessmentBySlug("learning-style")!;

export const learningStyleAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: learningStyleQuestions.length,
  },
  questions: learningStyleQuestions,
  tiers: learningStyleTiers,
  resolveInsights: resolveLearningStyleInsights,
};
