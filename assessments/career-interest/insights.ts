import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveCareerInterestInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const analytical = dimensionMap["Analytical"] ?? 50;
  const creative = dimensionMap["Creative"] ?? 50;
  const leadership = dimensionMap["Leadership"] ?? 50;
  const operational = dimensionMap["Operational"] ?? 50;
  const service = dimensionMap["Service"] ?? 50;

  // Identify top dimension
  const sortedDimensions = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1]);
  const primaryDomain = sortedDimensions[0]?.[0] || "Analytical";
  const secondaryDomain = sortedDimensions[1]?.[0] || "Creative";

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Strengths
  if (analytical >= 65) {
    strengths.push("Deep Analytical & Quantitative Acumen: You deconstruct complex data and solve systemic technical problems with precision.");
  }
  if (creative >= 65) {
    strengths.push("Divergent Creative Ideation: You thrive in ambiguous spaces, originating breakthrough concepts and intuitive storytelling.");
  }
  if (leadership >= 65) {
    strengths.push("Visionary Leadership & Strategic Influence: You mobilize teams toward ambitious outcomes and make firm decisions in high-stakes environments.");
  }
  if (operational >= 65) {
    strengths.push("Operational Excellence & Execution: You turn chaotic goals into predictable, dependable, and highly efficient execution engines.");
  }
  if (service >= 65) {
    strengths.push("Prosocial Service & Human Mentorship: You create deep psychological safety and empower people to overcome obstacles.");
  }
  if (strengths.length === 0) {
    strengths.push("Broad Intellectual Versatility: You can step into diverse organizational functions without being boxed into a narrow specialty.");
  }

  // Growth areas
  if (leadership < 50) {
    growthAreas.push("Stakeholder Alignment & Influence: Expanding your comfort with pitching ideas and speaking for teams in executive forums.");
  }
  if (operational < 50) {
    growthAreas.push("Process Rigor & Follow-Through: Ensuring innovative concepts are backed by realistic milestones and meticulous documentation.");
  }
  if (analytical < 50) {
    growthAreas.push("Data-Backed Decision Making: Strengthening your ability to validate intuitive hunches with objective quantitative metrics.");
  }
  if (creative < 50) {
    growthAreas.push("Creative Risk Taking: Cultivating willingness to experiment with unconventional, untested proposals.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Boundary Protection: Guard against burnout by avoiding taking on excess responsibilities across multiple domains simultaneously.");
  }

  // Actionable steps
  actionSteps.push(`Focus on 'T-shaped' career positioning: anchor your primary expertise in ${primaryDomain} while leveraging ${secondaryDomain} as your unique differentiator.`);
  actionSteps.push("Conduct quarterly career audit conversations with mentors to ensure 70%+ of your weekly working hours align with your core energizers.");
  actionSteps.push("Proactively seek cross-functional side projects or pilot initiatives that let you stretch your emerging leadership and creative skills.");

  return {
    insights: [
      tier.summary,
      `Your primary professional archetype is ${primaryDomain}, complemented by strong affinities in ${secondaryDomain}. Work environments that nurture this combination will maximize your engagement.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
