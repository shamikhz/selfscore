import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { careerInterestQuestions } from "./questions";
import { careerInterestTiers } from "./scoring";
import { resolveCareerInterestInsights } from "./insights";

const baseMeta = getAssessmentBySlug("career-interest")!;

export const careerInterestAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: careerInterestQuestions.length,
  },
  questions: careerInterestQuestions,
  tiers: careerInterestTiers,
  resolveInsights: resolveCareerInterestInsights,
};
