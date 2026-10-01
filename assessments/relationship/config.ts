import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { relationshipQuestions } from "./questions";
import { relationshipTiers } from "./scoring";
import { resolveRelationshipInsights } from "./insights";

const baseMeta = getAssessmentBySlug("relationship")!;

export const relationshipAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: relationshipQuestions.length,
  },
  questions: relationshipQuestions,
  tiers: relationshipTiers,
  resolveInsights: resolveRelationshipInsights,
};
