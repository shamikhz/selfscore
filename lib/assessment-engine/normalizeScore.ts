/**
 * Normalizes a raw score between minPossible and maxPossible into a target scale (default 0 - 100).
 * Clamps result defensively between 0 and targetScale.
 */
export function normalizeScore(
  rawScore: number,
  minPossible: number,
  maxPossible: number,
  targetScale: number = 100
): number {
  if (maxPossible <= minPossible) {
    return Math.round(targetScale / 2); // Default fallback if scale is degenerate
  }

  const normalized = ((rawScore - minPossible) / (maxPossible - minPossible)) * targetScale;
  const clamped = Math.max(0, Math.min(targetScale, normalized));

  return Math.round(clamped);
}
