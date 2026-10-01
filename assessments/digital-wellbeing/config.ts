import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { digitalWellbeingQuestions } from "./questions";
import { digitalWellbeingTiers } from "./scoring";
import { resolveDigitalWellbeingInsights } from "./insights";

const baseMeta = getAssessmentBySlug("digital-wellbeing")!;

export const digitalWellbeingAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: digitalWellbeingQuestions.length,
  },
  questions: digitalWellbeingQuestions,
  tiers: digitalWellbeingTiers,
  resolveInsights: resolveDigitalWellbeingInsights,
};
