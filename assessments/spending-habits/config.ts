import { spendingHabitsQuestions } from "./questions";
import { spendingHabitsTiers } from "./scoring";
import { resolveSpendingHabitsInsights } from "./insights";

export const spendingHabitsAssessmentDefinition = {
  questions: spendingHabitsQuestions,
  tiers: spendingHabitsTiers,
  resolveInsights: resolveSpendingHabitsInsights,
};
