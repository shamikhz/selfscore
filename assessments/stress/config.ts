import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { stressQuestions } from "./questions";
import { stressTiers } from "./scoring";
import { resolveStressInsights } from "./insights";

const baseMeta = getAssessmentBySlug("stress")!;

export const stressAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: stressQuestions.length,
  },
  questions: stressQuestions,
  tiers: stressTiers,
  resolveInsights: resolveStressInsights,
};
