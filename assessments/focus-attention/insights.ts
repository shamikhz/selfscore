import { ScoreTier } from "@/types/result";
import { InsightsData } from "@/lib/assessment-engine/resultGenerator";

export function resolveFocusAttentionInsights(
  overallScore: number,
  dimensionMap: Record<string, number>,
  tier: ScoreTier
): InsightsData {
  const sustained = dimensionMap["Sustained Attention"] ?? 50;
  const distraction = dimensionMap["Distraction Control"] ?? 50;
  const taskSwitching = dimensionMap["Task Switching"] ?? 50;
  const environment = dimensionMap["Environment Management"] ?? 50;
  const deepWork = dimensionMap["Deep Work"] ?? 50;

  const strengths: string[] = [];
  const growthAreas: string[] = [];
  const actionSteps: string[] = [];

  // Standout Strengths
  if (sustained >= 70) {
    strengths.push("Extended Cognitive Stamina: You sustain deep immersion on complex tasks for extended blocks without premature restlessness.");
  }
  if (distraction >= 70) {
    strengths.push("Impulse Shielding: You resist reflexively checking devices and remain impervious to siren calls of notification bells.");
  }
  if (taskSwitching >= 70) {
    strengths.push("Single-Tasking Discipline: You complete cognitive items sequentially, avoiding the severe mental drag of context switching.");
  }
  if (environment >= 70) {
    strengths.push("Proactive Work Architecture: You intentionally engineer low-friction, distraction-free physical and digital workspaces.");
  }
  if (deepWork >= 70) {
    strengths.push("High Flow Accessibility: You transition smoothly into deep work and push through initial friction points with ease.");
  }
  if (strengths.length === 0) {
    strengths.push("Responsive Adaptability: You can pivot swiftly to handle incoming requests and urgent situational needs.");
  }

  // Focus / Growth Areas
  if (distraction < 60) {
    growthAreas.push("Device Hyper-Reactivity: Habitually reaching for phones or checking browser tabs at the first hint of boredom.");
  }
  if (taskSwitching < 60) {
    growthAreas.push("Fragmented Workflow: Juggling multiple open projects concurrently, which splinters working memory.");
  }
  if (deepWork < 60) {
    growthAreas.push("Activation Energy Friction: Experiencing long delays and avoidance before finally starting challenging assignments.");
  }
  if (environment < 60) {
    growthAreas.push("Unprotected Attention Space: Allowing ambient noise, notifications, and clutter to disrupt fragile focus.");
  }
  if (growthAreas.length === 0) {
    growthAreas.push("Balancing Depth with Recovery: Ensuring intense focus blocks are paired with genuine cognitive downtime to prevent burnout.");
  }

  // Action Steps
  actionSteps.push("Use the '25/5 Pomodoro Protocol' or 50/10 Focus Blocks: work on one single document or task with zero tab switches until the timer rings.");
  actionSteps.push("Keep a 'Distraction Parking Lot': place a blank paper beside your keyboard to write down stray thoughts without abandoning your current task.");
  actionSteps.push("Put your phone in another room or turn on full 'Do Not Disturb' mode during your most important morning focus hour.");

  const topDimension = Object.entries(dimensionMap).sort((a, b) => b[1] - a[1])[0];

  return {
    insights: [
      tier.summary,
      `Your strongest attention asset is ${topDimension?.[0] || "Deep Work"} (${Math.round(
        topDimension?.[1] || 75
      )}%), which enables you to execute high-value cognitive output.`,
    ],
    strengths,
    growthAreas,
    actionSteps,
  };
}
