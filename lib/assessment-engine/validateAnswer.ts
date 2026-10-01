import { Question } from "@/types/question";

/**
 * Validates whether an answer value is valid for a given question
 */
export function validateAnswer(question: Question, value: unknown): boolean {
  if (typeof value !== "number" || isNaN(value)) {
    return false;
  }

  // Verify that the answer value corresponds to one of the configured options
  // For sliders, verify within option min/max bounds
  if (question.type === "slider") {
    const minVal = Math.min(...question.options.map((o) => o.value));
    const maxVal = Math.max(...question.options.map((o) => o.value));
    return value >= minVal && value <= maxVal;
  }

  return question.options.some((opt) => opt.value === value);
}

/**
 * Checks if all required questions in the assessment have been answered
 */
export function isAssessmentComplete(
  questions: Question[],
  answers: Record<string, number>
): boolean {
  if (!questions.length) return false;
  return questions.every((q) => typeof answers[q.id] === "number");
}

/**
 * Returns the count and percentage of answered questions
 */
export function getCompletionStats(
  questions: Question[],
  answers: Record<string, number>
): { answeredCount: number; totalCount: number; percentage: number } {
  const totalCount = questions.length;
  if (totalCount === 0) return { answeredCount: 0, totalCount: 0, percentage: 0 };

  const answeredCount = questions.filter(
    (q) => typeof answers[q.id] === "number"
  ).length;

  const percentage = Math.round((answeredCount / totalCount) * 100);
  return { answeredCount, totalCount, percentage };
}
