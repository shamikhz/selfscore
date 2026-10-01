import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { timeManagementQuestions } from "./questions";
import { timeManagementTiers } from "./scoring";
import { resolveTimeManagementInsights } from "./insights";

const baseMeta = getAssessmentBySlug("time-management")!;

export const timeManagementAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: timeManagementQuestions.length,
  },
  questions: timeManagementQuestions,
  tiers: timeManagementTiers,
  resolveInsights: resolveTimeManagementInsights,
};
