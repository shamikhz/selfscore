import { stressQuestions } from "./questions";
import { stressTiers } from "./scoring";
import { resolveStressInsights } from "./insights";

export const stressAssessmentDefinition = {
  questions: stressQuestions,
  tiers: stressTiers,
  resolveInsights: resolveStressInsights,
};
