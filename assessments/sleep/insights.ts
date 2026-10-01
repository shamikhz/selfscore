import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveSleepInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const circadian = dimensionMap["Circadian Consistency"] ?? 50;
  const windDown = dimensionMap["Evening Wind-Down"] ?? 50;
  const quality = dimensionMap["Sleep Quality"] ?? 50;
  const alertness = dimensionMap["Morning Alertness"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (circadian >= 70) {
    strengths.push("Circadian Entrainment: Stable sleep and wake anchors reinforce your natural internal biological clock.");
  }
  if (windDown >= 70) {
    strengths.push("Evening Decompression: Disciplined digital boundaries and environmental cues facilitate natural melatonin release.");
  }
  if (quality >= 70) {
    strengths.push("Sleep Architecture Depth: High continuity and minimal nocturnal awakenings allow complete slow-wave and REM cycles.");
  }
  if (alertness >= 70) {
    strengths.push("Sustained Daytime Vitality: Clear morning alertness without excessive dependency on chemical stimulants.");
  }
  if (strengths.length === 0) {
    strengths.push("Rest Awareness: You have identified clear target areas to transform your baseline sleep habits into a restorative engine.");
  }

  // Growth areas
  if (windDown < 60) {
    growthAreas.push("Pre-Bed Blue Light & Stimulation: Bedtime smartphone scrolling elevates cortisol and delays deep sleep onset.");
  }
  if (circadian < 60) {
    growthAreas.push("Social Jetlag: Shifting sleep windows between weekdays and weekends disrupts metabolic and circadian timing.");
  }
  if (quality < 60) {
    growthAreas.push("Nighttime Arousal: Frequent awakenings or prolonged sleep latency prevent deep restorative slow-wave sleep.");
  }
  if (alertness < 60) {
    growthAreas.push("Accumulated Sleep Debt: Severe morning sleep inertia and heavy afternoon crashes reflect chronic deficit.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Travel & Shift Resilience: Maintain sleep hygiene protocols even during travel or changing seasonal schedules.");
  }

  // Concrete action steps
  actionSteps.push("Anchor a consistent wake-up time 7 days a week (within 45 minutes) and view 10 minutes of direct morning sunlight.");
  actionSteps.push("Enforce a strict 60-minute digital sunset before bed: charge your phone outside the sleeping area and read a physical book.");
  actionSteps.push("Keep your sleeping room cool (around 66°F / 19°C) and set a caffeine cutoff at least 9 hours before your intended bedtime.");

  return {
    insights: [
      tier.summary,
      `Your strongest restorative pillar is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Circadian Consistency"
      }, which provides a steady foundation to optimize other sleep dimensions.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
