import { AssessmentDefinition } from "@/types/assessment";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { spendingHabitsQuestions } from "./questions";
import { spendingHabitsTiers } from "./scoring";
import { resolveSpendingHabitsInsights } from "./insights";

const baseMeta = getAssessmentBySlug("spending-habits")!;

export const spendingHabitsAssessmentDefinition: AssessmentDefinition = {
  meta: {
    ...baseMeta,
    questionCount: spendingHabitsQuestions.length,
  },
  questions: spendingHabitsQuestions,
  tiers: spendingHabitsTiers,
  resolveInsights: resolveSpendingHabitsInsights,
};
