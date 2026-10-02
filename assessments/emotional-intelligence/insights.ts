import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveEmotionalIntelligenceInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const selfAwareness = dimensionMap["Self-Awareness"] ?? 50;
  const regulation = dimensionMap["Emotional Regulation"] ?? 50;
  const empathy = dimensionMap["Empathy"] ?? 50;
  const socialAwareness = dimensionMap["Social Awareness"] ?? 50;
  const relationshipMgmt = dimensionMap["Relationship Management"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths
  if (selfAwareness >= 70) {
    strengths.push("Introspective Clarity: You accurately detect and name subtle internal shifts before they manifest in unconsidered behavior.");
  }
  if (regulation >= 70) {
    strengths.push("Composure Under Pressure: You maintain psychological equilibrium and resist impulsive retaliation during tense moments.");
  }
  if (empathy >= 70) {
    strengths.push("Empathetic Attunement: You listen with genuine presence, validating others' lived experiences without rushing to judge.");
  }
  if (socialAwareness >= 70) {
    strengths.push("Contextual Sensitivity: Highly adept at picking up non-verbal room dynamics, unspoken concerns, and group atmosphere.");
  }
  if (relationshipMgmt >= 70) {
    strengths.push("Collaborative Conflict Resolution: Skilled at bridging disagreements, repairing friction, and establishing mutual trust.");
  }
  if (strengths.length === 0) {
    strengths.push("Practical Grounding: You focus on straightforward communication and pragmatic approaches when interacting with others.");
  }

  // Growth Areas
  if (regulation < 60) {
    growthAreas.push("Post-Event Rumination: Tending to mentally replay stressful encounters, which drains energy and prolongs tension.");
  }
  if (selfAwareness < 60) {
    growthAreas.push("Trigger Identification: Occasional difficulty recognizing physical signals of stress before they influence verbal tone.");
  }
  if (empathy < 60) {
    growthAreas.push("Fixing vs. Listening: A natural impulse to solve practical problems immediately rather than acknowledging emotional context.");
  }
  if (relationshipMgmt < 60) {
    growthAreas.push("Direct Feedback Delivery: Hesitation when having necessary candid conversations, or delivering feedback with too much abruptness.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Energy Management: Protecting your own emotional reserves while supporting others through prolonged challenges.");
  }

  // Action Steps
  actionSteps.push("Incorporate a 5-second deliberate pause before responding when an email or comment sparks an immediate defensive urge.");
  actionSteps.push("In your next challenging conversation, ask one open clarifying question ('What part of this feels most urgent to you?') before offering your viewpoint.");
  actionSteps.push("At the end of demanding days, take 2 minutes to label your primary emotion with precision (e.g., 'overextended' rather than 'upset').");

  const topDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your strongest emotional pillar is ${topDimension?.[0] || "Self-Awareness"} (${Math.round(
        topDimension?.[1] || 75
      )}%), which serves as a valuable anchor in interpersonal communication.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
