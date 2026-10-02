import { iqQuestions } from "./questions";
import { iqTiers } from "./scoring";
import { resolveIqInsights } from "./insights";

export const iqAssessmentDefinition = {
  questions: iqQuestions,
  tiers: iqTiers,
  resolveInsights: resolveIqInsights,
};
