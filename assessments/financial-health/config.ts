import { financialHealthQuestions } from "./questions";
import { financialHealthTiers } from "./scoring";
import { resolveFinancialHealthInsights } from "./insights";

export const financialHealthAssessmentDefinition = {
  questions: financialHealthQuestions,
  tiers: financialHealthTiers,
  resolveInsights: resolveFinancialHealthInsights,
};
