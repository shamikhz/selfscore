import { sleepQuestions } from "./questions";
import { sleepTiers } from "./scoring";
import { resolveSleepInsights } from "./insights";

export const sleepAssessmentDefinition = {
  questions: sleepQuestions,
  tiers: sleepTiers,
  resolveInsights: resolveSleepInsights,
};
