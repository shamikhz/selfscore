import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { financialHealthQuestions } from "./questions";
import { financialHealthTiers } from "./scoring";
import { resolveFinancialHealthInsights } from "./insights";

const baseMeta = getAssessmentBySlug("financial-health")!;

export const financialHealthAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: financialHealthQuestions.length,
  },
  questions: financialHealthQuestions,
  tiers: financialHealthTiers,
  resolveInsights: resolveFinancialHealthInsights,
};
