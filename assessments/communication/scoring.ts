import { ScoreTier } from "@/types/result";

export const communicationTiers: ScoreTier[] = [
  {
    id: "master_communicator",
    label: "Masterful & Resonant Communicator",
    minScore: 80,
    maxScore: 100,
    summary: "You combine clear, assertive directness with deep empathetic listening, nonverbal discernment, and exceptional diplomatic tact.",
    color: "var(--success)",
  },
  {
    id: "skillful_communicator",
    label: "Skillful & Adaptable Communicator",
    minScore: 60,
    maxScore: 79,
    summary: "You express yourself clearly and listen well in most everyday interpersonal contexts, with targeted growth opportunities during high-stakes conflict.",
    color: "var(--primary)",
  },
  {
    id: "situational_communicator",
    label: "Situational / Variable Communication",
    minScore: 40,
    maxScore: 59,
    summary: "Under stress or emotional charge, your communication may veer into either passive avoidance or sharp defensiveness, creating unnecessary friction.",
    color: "var(--warning)",
  },
  {
    id: "reactive_friction",
    label: "Friction-Prone & Reactive Style",
    minScore: 0,
    maxScore: 39,
    summary: "Frequent misunderstandings, interrupted conversations, or harsh feedback delivery indicate significant opportunities for listening and diplomatic recalibration.",
    color: "var(--danger)",
  },
];
