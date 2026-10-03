import { AssessmentResult } from "@/types/result";

const STORAGE_PREFIX = "selfscore_result_";
const ALL_RESULTS_KEY = "selfscore_completed_slugs";
const STORAGE_SCHEMA_VERSION = 1;

/**
 * Strict schema validator for stored assessment results (Defends against XSS / corrupted storage)
 */
function isValidResult(data: unknown): data is AssessmentResult {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;

  const hasValidAssessmentId = typeof d.assessmentId === "string" && d.assessmentId.length > 0;
  const hasValidScore = typeof d.score === "number" && !isNaN(d.score) && d.score >= 0 && d.score <= 100;
  const hasValidCompletedAt = typeof d.completedAt === "string";
  const hasValidTier =
    typeof d.tier === "object" &&
    d.tier !== null &&
    typeof (d.tier as Record<string, unknown>).label === "string" &&
    typeof (d.tier as Record<string, unknown>).summary === "string";
  const hasValidAnswers = typeof d.answers === "object" && d.answers !== null;

  return hasValidAssessmentId && hasValidScore && hasValidCompletedAt && hasValidTier && hasValidAnswers;
}

/**
 * Defensive retrieval of all completed assessment IDs
 */
export function getCompletedAssessmentSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ALL_RESULTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
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

    // Schema version check and defensive payload validation
    if (!isValidResult(parsed)) {
      console.warn(`[Storage] Invalid or corrupted result schema for ${assessmentId}, clearing`);
      clearSavedResult(assessmentId);
      return null;
    }

    return parsed;
  } catch (err) {
    console.warn(`[Storage] Failed to read result for ${assessmentId}`, err);
    return null;
  }
}

/**
 * Defensive save of a completed assessment result with Quota management
 */
export function saveResult(result: AssessmentResult): boolean {
  if (typeof window === "undefined") return false;
  try {
    const payload = {
      ...result,
      _v: STORAGE_SCHEMA_VERSION,
    };
    const key = `${STORAGE_PREFIX}${result.assessmentId}`;
    localStorage.setItem(key, JSON.stringify(payload));

    // Update index list
    const completed = getCompletedAssessmentSlugs();
    if (!completed.includes(result.assessmentId)) {
      completed.push(result.assessmentId);
      localStorage.setItem(ALL_RESULTS_KEY, JSON.stringify(completed));
    }
    return true;
  } catch (err) {
    console.warn(`[Storage] Failed to save result for ${result.assessmentId}:`, err);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("selfscore_storage_quota_exceeded", {
          detail: { assessmentId: result.assessmentId },
        })
      );
    }
    return false;
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
