import { personalityQuestions } from "./questions";
import { personalityTiers } from "./scoring";
import { resolvePersonalityInsights } from "./insights";

export const personalityAssessmentDefinition = {
  questions: personalityQuestions,
  tiers: personalityTiers,
  resolveInsights: resolvePersonalityInsights,
};
