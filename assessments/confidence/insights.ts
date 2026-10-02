import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveConfidenceInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const selfBelief = dimensionMap["Self-Belief"] ?? 50;
  const assertiveness = dimensionMap["Assertiveness"] ?? 50;
  const selfAcceptance = dimensionMap["Self-Acceptance"] ?? 50;
  const resilience = dimensionMap["Resilience"] ?? 50;
  const socialConfidence = dimensionMap["Social Confidence"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths
  if (selfBelief >= 70) {
    strengths.push("Grounded Self-Efficacy: You trust in your innate capacity to learn, adapt, and solve unfamiliar challenges.");
  }
  if (assertiveness >= 70) {
    strengths.push("Clear Boundary Communication: You voice your needs, opinions, and boundaries without resorting to passivity or aggression.");
  }
  if (selfAcceptance >= 70) {
    strengths.push("Authentic Self-Worth: You maintain an unconditional foundation of self-respect that does not collapse during setbacks.");
  }
  if (resilience >= 70) {
    strengths.push("Adaptive Bounce-Back: You process constructive feedback and disappointments constructively without internalizing chronic shame.");
  }
  if (socialConfidence >= 70) {
    strengths.push("Social Presence: You carry yourself naturally in groups and engage with new people without excessive self-monitoring.");
  }
  if (strengths.length === 0) {
    strengths.push("Thoughtful Humility: You remain modest, open to input, and considerate of others in your interactions.");
  }

  // Focus / Growth Areas
  if (selfAcceptance < 60) {
    growthAreas.push("Harsh Inner Critic: A tendency to judge yourself by an unrealistic standard of perfection that drains confidence.");
  }
  if (assertiveness < 60) {
    growthAreas.push("Vocal Restraint: Holding back valuable insights in meetings or saying yes to requests when your capacity is full.");
  }
  if (resilience < 60) {
    growthAreas.push("Imposter Vulnerability: Attributing achievements to pure luck while magnifying minor errors into personal deficiencies.");
  }
  if (socialConfidence < 60) {
    growthAreas.push("Social Anticipatory Anxiety: Over-focusing on how others might evaluate you during group interactions.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Continuous Expansion: Stretching your comfort zone into even bolder leadership and creative ventures.");
  }

  // Action Steps
  actionSteps.push("Keep a daily 'Evidence of Competence' log: write down 2 small things you handled effectively each day to build objective self-trust.");
  actionSteps.push("Practice the 'Spotlight Effect' reminder: remember that people focus far less on your minor imperfections than your inner critic claims.");
  actionSteps.push("In your next meeting or group setting, speak up within the first 10 minutes to establish your presence early before hesitation builds.");

  const topDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your strongest foundation is ${topDimension?.[0] || "Self-Belief"} (${Math.round(
        topDimension?.[1] || 75
      )}%), which fuels your ongoing personal growth and courage.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
