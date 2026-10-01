import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveCommunicationInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const directness = dimensionMap["Directness"] ?? 50;
  const listening = dimensionMap["Empathetic Listening"] ?? 50;
  const diplomacy = dimensionMap["Diplomacy"] ?? 50;
  const nonverbal = dimensionMap["Nonverbal Sensitivity"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (directness >= 70) {
    strengths.push("Clear & Assertive Candor: You state boundaries, expectations, and priorities without confusing ambiguities.");
  }
  if (listening >= 70) {
    strengths.push("Deep Empathetic Attunement: You listen to understand rather than simply wait for your turn to speak.");
  }
  if (diplomacy >= 70) {
    strengths.push("Tactful De-escalation: You skillfully defuse interpersonal conflict, preserving dignity and building consensus.");
  }
  if (nonverbal >= 70) {
    strengths.push("Acute Nonverbal Perception: You read subtle shifts in body language, vocal cadence, and emotional subtext.");
  }
  if (strengths.length === 0) {
    strengths.push("Interpersonal Awareness: Recognizing conversational imbalances is the first step toward master-level social fluency.");
  }

  // Growth areas
  if (listening < 60) {
    growthAreas.push("Premature Problem-Solving: Jumping straight to solutions before conversation partners feel fully heard and validated.");
  }
  if (directness < 60) {
    growthAreas.push("Indirect Hints & Passive Ambiguity: Hesitating to state core needs directly, hoping others will infer your intent.");
  }
  if (diplomacy < 60) {
    growthAreas.push("Sharp Edge in Disagreements: Expressing criticism too bluntly, inadvertently triggering defensive emotional walls.");
  }
  if (nonverbal < 60) {
    growthAreas.push("Physical Projection Blindspots: Unintentional facial expressions or closed body language broadcasting disengagement.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Digital Tone Calibration: Ensuring written communications (email, chat) maintain the same warmth as face-to-face dialogues.");
  }

  // Actionable steps
  actionSteps.push("Adopt the 'Reflect Before Responding' technique: summarize the speaker's main emotional point in one sentence before giving your view.");
  actionSteps.push("When delivering difficult critique, use the 'Behavior-Impact-Request' model: describe observable actions without character judgments.");
  actionSteps.push("Practice a 2-second deliberate pause before answering challenging questions to regulate tone and gather diplomatic composure.");

  return {
    insights: [
      tier.summary,
      `Your strongest conversational anchor is ${
        Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "Empathetic Listening"
      }, which sets people at ease and fosters trust.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
