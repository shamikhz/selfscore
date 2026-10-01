import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { communicationQuestions } from "./questions";
import { communicationTiers } from "./scoring";
import { resolveCommunicationInsights } from "./insights";

const baseMeta = getAssessmentBySlug("communication")!;

export const communicationAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: communicationQuestions.length,
  },
  questions: communicationQuestions,
  tiers: communicationTiers,
  resolveInsights: resolveCommunicationInsights,
};
