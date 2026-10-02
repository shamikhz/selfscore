import { relationshipQuestions } from "./questions";
import { relationshipTiers } from "./scoring";
import { resolveRelationshipInsights } from "./insights";

export const relationshipAssessmentDefinition = {
  questions: relationshipQuestions,
  tiers: relationshipTiers,
  resolveInsights: resolveRelationshipInsights,
};
