import { careerInterestQuestions } from "./questions";
import { careerInterestTiers } from "./scoring";
import { resolveCareerInterestInsights } from "./insights";

export const careerInterestAssessmentDefinition = {
  questions: careerInterestQuestions,
  tiers: careerInterestTiers,
  resolveInsights: resolveCareerInterestInsights,
};
