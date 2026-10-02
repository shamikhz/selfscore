import { digitalWellbeingQuestions } from "./questions";
import { digitalWellbeingTiers } from "./scoring";
import { resolveDigitalWellbeingInsights } from "./insights";

export const digitalWellbeingAssessmentDefinition = {
  questions: digitalWellbeingQuestions,
  tiers: digitalWellbeingTiers,
  resolveInsights: resolveDigitalWellbeingInsights,
};
