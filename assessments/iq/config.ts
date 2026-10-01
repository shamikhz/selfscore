import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { iqQuestions } from "./questions";
import { iqTiers } from "./scoring";
import { resolveIqInsights } from "./insights";

const baseMeta = getAssessmentBySlug("iq")!;

export const iqAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: iqQuestions.length,
  },
  questions: iqQuestions,
  tiers: iqTiers,
  resolveInsights: resolveIqInsights,
};
