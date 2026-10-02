import { communicationQuestions } from "./questions";
import { communicationTiers } from "./scoring";
import { resolveCommunicationInsights } from "./insights";

export const communicationAssessmentDefinition = {
  questions: communicationQuestions,
  tiers: communicationTiers,
  resolveInsights: resolveCommunicationInsights,
};
