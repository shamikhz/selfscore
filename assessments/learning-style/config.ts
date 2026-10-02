import { learningStyleQuestions } from "./questions";
import { learningStyleTiers } from "./scoring";
import { resolveLearningStyleInsights } from "./insights";

export const learningStyleAssessmentDefinition = {
  questions: learningStyleQuestions,
  tiers: learningStyleTiers,
  resolveInsights: resolveLearningStyleInsights,
};
