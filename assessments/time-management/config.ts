import { timeManagementQuestions } from "./questions";
import { timeManagementTiers } from "./scoring";
import { resolveTimeManagementInsights } from "./insights";

export const timeManagementAssessmentDefinition = {
  questions: timeManagementQuestions,
  tiers: timeManagementTiers,
  resolveInsights: resolveTimeManagementInsights,
};
