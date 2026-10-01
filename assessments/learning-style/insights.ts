import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveLearningStyleInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const visual = dimensionMap["Visual Synthesis"] ?? 50;
  const applied = dimensionMap["Applied Practice"] ?? 50;
  const auditory = dimensionMap["Auditory & Dialogue"] ?? 50;
  const conceptual = dimensionMap["Conceptual Frameworks"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Identify top primary learning mode
  const sortedModes = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1]);
  const primaryMode = sortedModes[0]?.[0] || "Visual Synthesis";

  // Strengths
  if (visual >= 70) {
    strengths.push("Visual & Spatial Schematics: Rapid comprehension through diagrams, architecture maps, and color-coded conceptual hierarchies.");
  }
  if (applied >= 70) {
    strengths.push("Kinesthetic Sandbox Prototyping: Immediate mastery through active building, experimentation, and trial-and-error feedback.");
  }
  if (auditory >= 70) {
    strengths.push("Dialectic Verbalization: Crystallizing thoughts by explaining them aloud, engaging in Socratic debate, and absorbing rich discussions.");
  }
  if (conceptual >= 70) {
    strengths.push("First Principles Deduction: Building unified theoretical mental models that connect disparate disciplines and predict outcomes.");
  }
  if (strengths.length === 0) {
    strengths.push("Flexible Receptivity: An open baseline ready to be tailored with targeted study strategies.");
  }

  // Growth areas
  if (visual < 55) {
    growthAreas.push("Visual Synthesis: Practice translating dense text paragraphs into quick 3-box diagram sketches.");
  }
  if (applied < 55) {
    growthAreas.push("Theory-to-Practice Gap: Moving beyond passive reading into active, hands-on project creation.");
  }
  if (auditory < 55) {
    growthAreas.push("Verbal Scaffolding: Utilizing verbal articulation or the Feynman technique to stress-test your assumptions.");
  }
  if (conceptual < 55) {
    growthAreas.push("Axiomatic Depth: Inquiring into the underlying 'why' rather than solely relying on step-by-step cookbook recipes.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Multimodal Translation: Practice explaining complex ideas in your non-dominant format to deepen mastery.");
  }

  // Actionable steps
  actionSteps.push(`Format your study resources around your primary mode (${primaryMode}) — e.g. create diagrams if visual, or build sandboxes if applied.`);
  actionSteps.push("Use the Feynman Technique: spend 5 minutes explaining what you just learned in plain language as if teaching a 12-year-old.");
  actionSteps.push("Incorporate spaced repetition flashcards or active recall quizzes 24 hours and 7 days after first absorbing new material.");

  return {
    insights: [
      tier.summary,
      `Your predominant cognitive learning preference is ${primaryMode} (${Math.round(sortedModes[0]?.[1] || 75)}%), which represents your fastest highway for skill acquisition.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
