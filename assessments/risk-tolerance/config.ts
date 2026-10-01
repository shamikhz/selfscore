import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { riskToleranceQuestions } from "./questions";
import { riskToleranceTiers } from "./scoring";
import { resolveRiskToleranceInsights } from "./insights";

const baseMeta = getAssessmentBySlug("risk-tolerance")!;

export const riskToleranceAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: riskToleranceQuestions.length,
  },
  questions: riskToleranceQuestions,
  tiers: riskToleranceTiers,
  resolveInsights: resolveRiskToleranceInsights,
};
