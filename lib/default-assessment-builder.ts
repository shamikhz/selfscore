import { AssessmentMeta, AssessmentDefinition } from "@/types/assessment";
import { Question } from "@/types/question";
import { ScoreTier } from "@/types/result";

/**
 * Builds a structured, high-quality fallback AssessmentDefinition for any assessment
 * in the catalog whose custom question files are being developed.
 */
export function buildDefaultAssessmentDefinition(meta: AssessmentMeta): AssessmentDefinition {
  const dimensions = meta.dimensions.length > 0 ? meta.dimensions : ["Core Practice", "Consistency", "Mindset", "Adaptability"];
  const questions: Question[] = [];

  // Generate 20 structured questions across the assessment's defined dimensions (4 per dimension for 5 dimensions, or 5 per dimension for 4 dimensions)
  const questionsPerDim = Math.max(3, Math.floor(20 / dimensions.length));

  dimensions.forEach((dim, dimIdx) => {
    for (let i = 1; i <= questionsPerDim; i++) {
      const qIndex = questions.length + 1;
      const isReversed = (qIndex % 5 === 0); // Include methodologically sound reverse-scored items

      // Mix question formats: Likert, Frequency, Scenario
      if (qIndex % 4 === 0) {
        // Scenario format
        questions.push({
          id: `${meta.id}_q${qIndex}`,
          title: `When dealing with ${dim.toLowerCase()} challenges in demanding situations:`,
          subtitle: "Select the response that best describes your instinctual action.",
          type: "scenario",
          dimension: dim,
          reversed: isReversed,
          options: [
            { id: "opt_1", label: "I step back, evaluate the parameters, and methodically address the root cause.", value: isReversed ? 1 : 4, description: "Structured and deliberate response" },
            { id: "opt_2", label: "I consult available references and apply established best practices.", value: isReversed ? 2 : 3, description: "Standard reliable methodology" },
            { id: "opt_3", label: "I improvise in the moment, hoping the difficulty resolves quickly.", value: isReversed ? 3 : 2, description: "Reactive adaptation" },
            { id: "opt_4", label: "I feel overwhelmed and tend to delay taking decisive steps.", value: isReversed ? 4 : 1, description: "Hesitant or avoidance response" },
          ],
        });
      } else if (qIndex % 3 === 0) {
        // Frequency format
        questions.push({
          id: `${meta.id}_q${qIndex}`,
          title: `How frequently do you deliberately practice or review your ${dim.toLowerCase()} strategies?`,
          subtitle: "Reflect on your typical weekly or monthly routines.",
          type: "frequency",
          dimension: dim,
          reversed: isReversed,
          options: [
            { id: "freq_1", label: "Rarely or never", value: isReversed ? 4 : 1 },
            { id: "freq_2", label: "Occasionally when problems arise", value: isReversed ? 3 : 2 },
            { id: "freq_3", label: "Regularly as part of my routine", value: isReversed ? 2 : 3 },
            { id: "freq_4", label: "Consistently with proactive tracking", value: isReversed ? 1 : 4 },
          ],
        });
      } else {
        // Likert scale
        questions.push({
          id: `${meta.id}_q${qIndex}`,
          title: isReversed
            ? `I often struggle to maintain consistency when focusing on ${dim.toLowerCase()}.`
            : `I have clear, reliable frameworks for navigating ${dim.toLowerCase()}.`,
          subtitle: "Rate how accurately this statement describes you.",
          type: "likert-scale",
          dimension: dim,
          reversed: isReversed,
          options: [
            { id: "likert_1", label: "Strongly Disagree", value: 1 },
            { id: "likert_2", label: "Disagree", value: 2 },
            { id: "likert_3", label: "Neutral", value: 3 },
            { id: "likert_4", label: "Agree", value: 4 },
            { id: "likert_5", label: "Strongly Agree", value: 5 },
          ],
        });
      }
    }
  });

  const tiers: ScoreTier[] = [
    {
      id: "advanced",
      label: "Mastery / High Alignment",
      minScore: 80,
      maxScore: 100,
      summary: `Your responses reflect high proficiency, deliberate awareness, and disciplined execution across ${meta.title.toLowerCase()}.`,
      color: "var(--success)",
    },
    {
      id: "proficient",
      label: "Strong / Developing Strength",
      minScore: 60,
      maxScore: 79,
      summary: `You demonstrate consistent foundational strength with reliable instincts and clear opportunities for targeted refinement.`,
      color: "var(--primary)",
    },
    {
      id: "moderate",
      label: "Moderate / Emerging",
      minScore: 40,
      maxScore: 59,
      summary: `Your responses show a balanced baseline with situational fluctuations depending on stress and environment.`,
      color: "var(--warning)",
    },
    {
      id: "foundational",
      label: "Foundational / Exploration",
      minScore: 0,
      maxScore: 39,
      summary: `You are in an active discovery stage where establishing structured daily habits will produce immediate gains.`,
      color: "var(--info)",
    },
  ];

  return {
    meta,
    questions,
    tiers,
    resolveInsights: (overallScore, dimensionMap, tier) => {
      const topDimensions = Object.entries(dimensionMap)
        .sort((a, b) => b[1] - a[1])
        .map(([name]) => name);

      const strengths = topDimensions.slice(0, 2).map(
        (name) => `Strong command of ${name} (${dimensionMap[name]}%) providing a solid foundation.`
      );

      const growthAreas = topDimensions.slice(-2).reverse().map(
        (name) => `Opportunity to reinforce ${name} (${dimensionMap[name]}%) with structured habits.`
      );

      const actionSteps = [
        `Dedicate 10 minutes weekly to review your ${topDimensions[topDimensions.length - 1] || "primary"} routines.`,
        `Establish one non-negotiable daily trigger to build consistent momentum.`,
        `Re-assess in 30 days to measure positive shifts in your baseline scores.`,
      ];

      return {
        insights: [tier.summary],
        strengths,
        growthAreas,
        actionSteps,
      };
    },
  };
}
