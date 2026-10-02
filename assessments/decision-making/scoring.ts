import { ScoreTier } from "@/types/result";

export const decisionMakingTiers: ScoreTier[] = [
  {
    id: "strategic_deliberative",
    label: "Strategic & Systematic",
    minScore: 80,
    maxScore: 100,
    summary: "You approach complex decisions with high analytical rigor, clear risk awareness, healthy intuition integration, and deliberate post-decision learning.",
    color: "var(--success)",
  },
  {
    id: "balanced_adaptive",
    label: "Balanced & Adaptive",
    minScore: 60,
    maxScore: 79,
    summary: "You strike an effective balance between gathering sufficient data and executing with timely conviction, adapting your approach according to stakes and urgency.",
    color: "var(--primary)",
  },
  {
    id: "intuitive_action",
    label: "Intuitive & Action-Oriented",
    minScore: 40,
    maxScore: 59,
    summary: "You emphasize momentum, practical experience, and gut instincts, which speeds up everyday choices while occasionally benefiting from deeper risk stress-testing.",
    color: "var(--warning)",
  },
  {
    id: "emerging_deliberative",
    label: "Cautious / Developing Conviction",
    minScore: 0,
    maxScore: 39,
    summary: "Your decision patterns reflect significant caution, hesitation under incomplete information, or post-decision rumination that can be streamlined through structured frameworks.",
    color: "var(--info)",
  },
];
