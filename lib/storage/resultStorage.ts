import { AssessmentResult } from "@/types/result";

const STORAGE_PREFIX = "selfscore_result_";
const ALL_RESULTS_KEY = "selfscore_completed_slugs";

/**
 * Defensive retrieval of all completed assessment IDs
 */
export function getCompletedAssessmentSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ALL_RESULTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn("[Storage] Failed to read completed assessment list", err);
    return [];
  }
}

/**
 * Defensive retrieval of a saved result for a specific assessment
 */
export function getSavedResult(assessmentId: string): AssessmentResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${assessmentId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);

    // Defensive schema validation
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      typeof parsed.score !== "number" ||
      typeof parsed.tier !== "object"
    ) {
      console.warn(`[Storage] Invalid result schema for ${assessmentId}`);
      return null;
    }

    return parsed as AssessmentResult;
  } catch (err) {
    console.warn(`[Storage] Failed to read result for ${assessmentId}`, err);
    return null;
  }
}

/**
 * Defensive save of a completed assessment result
 */
export function saveResult(result: AssessmentResult): void {
  if (typeof window === "undefined") return;
  try {
    const key = `${STORAGE_PREFIX}${result.assessmentId}`;
    localStorage.setItem(key, JSON.stringify(result));

    // Update index list
    const completed = getCompletedAssessmentSlugs();
    if (!completed.includes(result.assessmentId)) {
      completed.push(result.assessmentId);
      localStorage.setItem(ALL_RESULTS_KEY, JSON.stringify(completed));
    }
  } catch (err) {
    console.warn(`[Storage] Failed to save result for ${result.assessmentId}`, err);
  }
}

/**
 * Clear a specific saved result
 */
export function clearSavedResult(assessmentId: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${assessmentId}`);
    const completed = getCompletedAssessmentSlugs().filter((id) => id !== assessmentId);
    localStorage.setItem(ALL_RESULTS_KEY, JSON.stringify(completed));
  } catch (err) {
    console.warn(`[Storage] Failed to remove result for ${assessmentId}`, err);
  }
}
