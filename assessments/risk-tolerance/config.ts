import { riskToleranceQuestions } from "./questions";
import { riskToleranceTiers } from "./scoring";
import { resolveRiskToleranceInsights } from "./insights";

export const riskToleranceAssessmentDefinition = {
  questions: riskToleranceQuestions,
  tiers: riskToleranceTiers,
  resolveInsights: resolveRiskToleranceInsights,
};
