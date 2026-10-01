import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { personalityQuestions } from "./questions";
import { personalityTiers } from "./scoring";
import { resolvePersonalityInsights } from "./insights";

const baseMeta = getAssessmentBySlug("personality")!;

export const personalityAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: personalityQuestions.length,
  },
  questions: personalityQuestions,
  tiers: personalityTiers,
  resolveInsights: resolvePersonalityInsights,
};
