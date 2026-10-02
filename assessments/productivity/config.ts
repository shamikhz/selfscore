import { productivityQuestions } from "./questions";
import { productivityTiers } from "./scoring";
import { resolveProductivityInsights } from "./insights";

export const productivityAssessmentDefinition = {
  questions: productivityQuestions,
  tiers: productivityTiers,
  resolveInsights: resolveProductivityInsights,
};
