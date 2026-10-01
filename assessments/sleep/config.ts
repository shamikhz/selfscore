import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { sleepQuestions } from "./questions";
import { sleepTiers } from "./scoring";
import { resolveSleepInsights } from "./insights";

const baseMeta = getAssessmentBySlug("sleep")!;

export const sleepAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: sleepQuestions.length,
  },
  questions: sleepQuestions,
  tiers: sleepTiers,
  resolveInsights: resolveSleepInsights,
};
