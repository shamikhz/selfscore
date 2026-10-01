export interface AssessmentProgress {
  assessmentId: string;
  currentQuestionIndex: number;
  answers: Record<string, number>; // { [questionId]: optionValue }
  selectedOptionIds?: Record<string, string>; // { [questionId]: optionId }
  updatedAt: string; // ISO 8601
}

const PROGRESS_PREFIX = "selfscore_progress_";

/**
 * Saves current assessment progress safely into localStorage
 */
export function saveProgress(
  assessmentId: string,
  currentQuestionIndex: number,
  answers: Record<string, number>,
  selectedOptionIds?: Record<string, string>
): void {
  if (typeof window === "undefined") return;
  try {
    const data: AssessmentProgress = {
      assessmentId,
      currentQuestionIndex,
      answers,
      selectedOptionIds,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(`${PROGRESS_PREFIX}${assessmentId}`, JSON.stringify(data));
  } catch (err) {
    console.warn(`[Storage] Failed to save progress for ${assessmentId}:`, err);
  }
}

/**
 * Defensively retrieves active assessment progress
 */
export function getProgress(assessmentId: string): AssessmentProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${PROGRESS_PREFIX}${assessmentId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    // Defensive schema validation
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.currentQuestionIndex !== "number" ||
      typeof parsed.answers !== "object"
    ) {
      console.warn(`[Storage] Invalid progress structure for ${assessmentId}`);
      return null;
    }

    return parsed as AssessmentProgress;
  } catch (err) {
    console.warn(`[Storage] Failed to read progress for ${assessmentId}:`, err);
    return null;
  }
}

/**
 * Clears saved progress once an assessment is completed or reset
 */
export function clearProgress(assessmentId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${PROGRESS_PREFIX}${assessmentId}`);
  } catch (err) {
    console.warn(`[Storage] Failed to clear progress for ${assessmentId}:`, err);
  }
}
