import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveStressInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const cognitive = dimensionMap["Cognitive Pressure"] ?? 50;
  const physical = dimensionMap["Physical Tension"] ?? 50;
  const emotional = dimensionMap["Emotional Load"] ?? 50;
  const recovery = dimensionMap["Recovery Margin"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout strengths
  if (recovery >= 70) {
    strengths.push("Proactive Recovery Buffers: You protect meaningful downtime and intentionally renew your physical and mental energy.");
  }
  if (cognitive >= 70) {
    strengths.push("Cognitive Compartmentalization: You possess strong mental boundaries that prevent workday thoughts from intruding on rest.");
  }
  if (emotional >= 70) {
    strengths.push("Emotional Equilibrium: You maintain patience, humor, and grounded perspective under interpersonal and deadline pressures.");
  }
  if (physical >= 70) {
    strengths.push("Somatic Regulation: Your nervous system avoids prolonged fight-or-flight states, maintaining relaxed muscles and natural breathing.");
  }
  if (strengths.length === 0) {
    strengths.push("Self-Awareness: You openly acknowledge current tension patterns, which is the foundational first step to resetting balance.");
  }

  // Growth areas
  if (cognitive < 60) {
    growthAreas.push("Cognitive Overdrive: Continuous mental multitasking and evening rumination drain executive attention.");
  }
  if (physical < 60) {
    growthAreas.push("Somatic Tension Holding: Unconscious clenching in the neck, jaw, or chest indicates chronic low-grade sympathetic activation.");
  }
  if (emotional < 60) {
    growthAreas.push("Emotional Margin Depletion: Heightened irritability or sudden afternoon fatigue suggest an overdrawn emotional reserve.");
  }
  if (recovery < 60) {
    growthAreas.push("Inadequate Restorative Margin: Insufficient disconnected hours prevent full baseline reset before new demands arrive.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Pacing in Peak Seasons: Maintain baseline wellness rituals even during unexpected deadline spikes.");
  }

  // Actionable steps
  actionSteps.push("Implement a 15-minute 'shutdown ritual' at the end of each workday: write down tomorrow's top 3 tasks and close all work tabs.");
  actionSteps.push("Practice 3 minutes of physiological sigh breathing (two quick inhales through the nose, one long slow exhale through the mouth) whenever tension surfaces.");
  actionSteps.push("Block off at least 90 continuous minutes over the weekend strictly dedicated to screen-free offline leisure or nature immersion.");

  return {
    insights: [
      tier.summary,
      `Your highest resilience score was observed in ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Recovery Margin"
      }, which serves as a core protective anchor for your wellbeing.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
