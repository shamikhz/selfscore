import { Question } from "@/types/question";

export const confidenceQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "conf_q1",
    title: "When facing a new or unfamiliar challenge, what is your initial internal narrative?",
    subtitle: "Baseline self-efficacy and internal dialogue.",
    type: "single-choice",
    dimension: "Self-Belief",
    options: [
      { id: "conf_1_1", label: "I assume I will probably fail or make a fool of myself.", value: 1 },
      { id: "conf_1_2", label: "I feel doubtful and look for someone else to take the lead.", value: 2 },
      { id: "conf_1_3", label: "I feel slight nervous energy, but believe I can learn as I go.", value: 4 },
      { id: "conf_1_4", label: "I feel energized and confident in my ability to figure it out.", value: 5 },
    ],
  },
  {
    id: "conf_q2",
    title: "I frequently compare my lifestyle, achievements, or appearance with others and feel inadequate.",
    subtitle: "Social comparison and self-worth stability (reversed).",
    type: "frequency",
    dimension: "Self-Acceptance",
    reversed: true,
    options: [
      { id: "conf_2_1", label: "Almost Constantly", value: 1 },
      { id: "conf_2_2", label: "Frequently", value: 2 },
      { id: "conf_2_3", label: "Occasionally", value: 3 },
      { id: "conf_2_4", label: "Rarely", value: 4 },
      { id: "conf_2_5", label: "Almost Never", value: 5 },
    ],
  },
  {
    id: "conf_q3",
    title: "I value my own judgment and trust my instincts even when others around me hold different opinions.",
    subtitle: "Internal locus of evaluation.",
    type: "likert-scale",
    dimension: "Self-Belief",
    options: [
      { id: "conf_3_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_3_2", label: "Disagree", value: 2 },
      { id: "conf_3_3", label: "Neutral", value: 3 },
      { id: "conf_3_4", label: "Agree", value: 4 },
      { id: "conf_3_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q4",
    title: "When you receive a genuine compliment from a peer or superior, how do you typically receive it?",
    subtitle: "Receptivity and self-worth acceptance.",
    type: "scenario",
    dimension: "Self-Acceptance",
    options: [
      { id: "conf_4_a", label: "Dismiss or minimize it: 'Oh, it was nothing, anyone could have done it.'", value: 1, description: "Dismissive discounting" },
      { id: "conf_4_b", label: "Assume they are just being polite and don't really mean it.", value: 2, description: "Skeptical suspicion" },
      { id: "conf_4_c", label: "Feel slightly awkward but say thank you politely.", value: 3, description: "Polite acceptance" },
      { id: "conf_4_d", label: "Warmly appreciate the recognition and acknowledge my effort.", value: 5, description: "Grounded appreciation" },
    ],
  },
  {
    id: "conf_q5",
    title: "I feel that my core worth as a person depends heavily on my latest productivity or achievements.",
    subtitle: "Contingent self-esteem (reversed).",
    type: "likert-scale",
    dimension: "Self-Acceptance",
    reversed: true,
    options: [
      { id: "conf_5_1", label: "Strongly Agree", value: 1 },
      { id: "conf_5_2", label: "Agree", value: 2 },
      { id: "conf_5_3", label: "Neutral", value: 3 },
      { id: "conf_5_4", label: "Disagree", value: 4 },
      { id: "conf_5_5", label: "Strongly Disagree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "conf_q6",
    title: "In a meeting or group discussion where you have a relevant idea or disagree with the direction, what do you do?",
    subtitle: "Assertive vocal contribution and social presence.",
    type: "scenario",
    dimension: "Assertiveness",
    options: [
      { id: "conf_6_a", label: "Stay silent because I worry my idea is foolish or will cause friction.", value: 1, description: "Inhibited silence" },
      { id: "conf_6_b", label: "Wait until someone asks me directly, then share briefly.", value: 2, description: "Hesitant compliance" },
      { id: "conf_6_c", label: "Raise my hand or find a polite opening to state my perspective clearly.", value: 4, description: "Constructive assertiveness" },
      { id: "conf_6_d", label: "Confidently voice my viewpoint and welcome discussion or counterarguments.", value: 5, description: "Confident leadership" },
    ],
  },
  {
    id: "conf_q7",
    title: "I can comfortably establish and communicate personal boundaries without feeling overwhelming guilt.",
    subtitle: "Boundary assertiveness and relational courage.",
    type: "likert-scale",
    dimension: "Assertiveness",
    options: [
      { id: "conf_7_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_7_2", label: "Disagree", value: 2 },
      { id: "conf_7_3", label: "Neutral", value: 3 },
      { id: "conf_7_4", label: "Agree", value: 4 },
      { id: "conf_7_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q8",
    title: "When attending a social gathering or networking event where you know very few people, how do you feel?",
    subtitle: "Social confidence and interpersonal comfort.",
    type: "single-choice",
    dimension: "Social Confidence",
    options: [
      { id: "conf_8_1", label: "Overwhelmed with self-consciousness, wanting to leave immediately.", value: 1 },
      { id: "conf_8_2", label: "Anxious and sticking strictly to corners or my phone.", value: 2 },
      { id: "conf_8_3", label: "Mildly hesitant initially, but able to strike up conversations comfortably.", value: 4 },
      { id: "conf_8_4", label: "Excited to meet new people and naturally approachable.", value: 5 },
    ],
  },
  {
    id: "conf_q9",
    title: "I am willing to try learning new skills in public settings even if I make beginner mistakes.",
    subtitle: "Vulnerability and growth-oriented self-belief.",
    type: "likert-scale",
    dimension: "Self-Belief",
    options: [
      { id: "conf_9_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_9_2", label: "Disagree", value: 2 },
      { id: "conf_9_3", label: "Neutral", value: 3 },
      { id: "conf_9_4", label: "Agree", value: 4 },
      { id: "conf_9_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q10",
    title: "When you make a visible mistake in front of colleagues or friends, how do you handle it?",
    subtitle: "Self-compassion and resilience under error.",
    type: "scenario",
    dimension: "Resilience",
    options: [
      { id: "conf_10_a", label: "Feel intense shame and replay the moment for days.", value: 1, description: "Shame spiral" },
      { id: "conf_10_b", label: "Try to hide or deflect blame onto external circumstances.", value: 2, description: "Deflection" },
      { id: "conf_10_c", label: "Acknowledge the mistake, laugh it off or apologize, and move forward.", value: 4, description: "Grounded correction" },
      { id: "conf_10_d", label: "Take full ownership calmly, treat it as a learning opportunity, and fix it.", value: 5, description: "Resilient ownership" },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "conf_q11",
    title: "How quickly do you bounce back after experiencing a major disappointment or rejection?",
    subtitle: "Psychological bounce-back stamina.",
    type: "single-choice",
    dimension: "Resilience",
    options: [
      { id: "conf_11_1", label: "It paralyzes my self-worth for a very long period.", value: 1 },
      { id: "conf_11_2", label: "It takes several weeks of avoidance to regain equilibrium.", value: 2 },
      { id: "conf_11_3", label: "I feel the sting briefly, process the feelings, and recalibrate within days.", value: 4 },
      { id: "conf_11_4", label: "I recover quickly and channel the experience into motivation for my next step.", value: 5 },
    ],
  },
  {
    id: "conf_q12",
    title: "I can ask for fair compensation, recognition, or help without feeling like a burden.",
    subtitle: "Assertive entitlement to fair treatment.",
    type: "likert-scale",
    dimension: "Assertiveness",
    options: [
      { id: "conf_12_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_12_2", label: "Disagree", value: 2 },
      { id: "conf_12_3", label: "Neutral", value: 3 },
      { id: "conf_12_4", label: "Agree", value: 4 },
      { id: "conf_12_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q13",
    title: "When someone in a conversation speaks over you or interrupts repeatedly, what is your standard response?",
    subtitle: "Navigating conversational boundaries assertively.",
    type: "scenario",
    dimension: "Social Confidence",
    options: [
      { id: "conf_13_a", label: "Shrink back and give up on sharing my thought.", value: 1, description: "Submissive withdrawal" },
      { id: "conf_13_b", label: "Feel deep resentment silently but say nothing.", value: 2, description: "Silent resentment" },
      { id: "conf_13_c", label: "Politely but firmly finish my thought: 'Let me just finish this point.'", value: 4, description: "Calm assertiveness" },
      { id: "conf_13_d", label: "Smoothly guide the conversation back to ensure everyone's voice is heard.", value: 5, description: "Commanding facilitation" },
    ],
  },
  {
    id: "conf_q14",
    title: "I accept my personal quirks and imperfections without feeling the need to project a flawless facade.",
    subtitle: "Authentic self-acceptance.",
    type: "likert-scale",
    dimension: "Self-Acceptance",
    options: [
      { id: "conf_14_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_14_2", label: "Disagree", value: 2 },
      { id: "conf_14_3", label: "Neutral", value: 3 },
      { id: "conf_14_4", label: "Agree", value: 4 },
      { id: "conf_14_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q15",
    title: "How often do you hold back your genuine personality because you fear being judged by others?",
    subtitle: "Fear of negative evaluation (reversed).",
    type: "frequency",
    dimension: "Social Confidence",
    reversed: true,
    options: [
      { id: "conf_15_1", label: "Almost Constantly", value: 1 },
      { id: "conf_15_2", label: "Frequently", value: 2 },
      { id: "conf_15_3", label: "Occasionally in unfamiliar groups", value: 3 },
      { id: "conf_15_4", label: "Rarely", value: 4 },
      { id: "conf_15_5", label: "Almost Never (comfortable in my own skin)", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "conf_q16",
    title: "When you receive severe or unfair criticism, how do you protect your inner sense of self?",
    subtitle: "Psychological shielding and self-concept stability.",
    type: "scenario",
    dimension: "Self-Belief",
    options: [
      { id: "conf_16_a", label: "Believe the criticism completely and spiral into self-doubt.", value: 1, description: "Total internalization" },
      { id: "conf_16_b", label: "Become aggressively hostile and attack their character.", value: 2, description: "Defensive attack" },
      { id: "conf_16_c", label: "Separate any constructive truth from their tone, and discard the rest.", value: 4, description: "Objective filter" },
      { id: "conf_16_d", label: "Remain anchored in my values while maintaining curiosity about their perspective.", value: 5, description: "Centered equilibrium" },
    ],
  },
  {
    id: "conf_q17",
    title: "I feel that I have unique strengths and meaningful value to contribute to the world.",
    subtitle: "Core intrinsic self-value.",
    type: "likert-scale",
    dimension: "Self-Belief",
    options: [
      { id: "conf_17_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_17_2", label: "Disagree", value: 2 },
      { id: "conf_17_3", label: "Neutral", value: 3 },
      { id: "conf_17_4", label: "Agree", value: 4 },
      { id: "conf_17_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q18",
    title: "How often do you experience 'imposter syndrome' (feeling like a fraud who will be exposed)?",
    subtitle: "Perceived intellectual fraudulence (reversed).",
    type: "frequency",
    dimension: "Resilience",
    reversed: true,
    options: [
      { id: "conf_18_1", label: "Almost Daily", value: 1 },
      { id: "conf_18_2", label: "Frequently during new responsibilities", value: 2 },
      { id: "conf_18_3", label: "Occasionally", value: 3 },
      { id: "conf_18_4", label: "Rarely", value: 4 },
      { id: "conf_18_5", label: "Almost Never (trust my earned competence)", value: 5 },
    ],
  },
  {
    id: "conf_q19",
    title: "I can stand firmly by my core convictions even when it is socially unpopular or uncomfortable.",
    subtitle: "Moral and intellectual assertiveness.",
    type: "likert-scale",
    dimension: "Assertiveness",
    options: [
      { id: "conf_19_1", label: "Strongly Disagree", value: 1 },
      { id: "conf_19_2", label: "Disagree", value: 2 },
      { id: "conf_19_3", label: "Neutral", value: 3 },
      { id: "conf_19_4", label: "Agree", value: 4 },
      { id: "conf_19_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "conf_q20",
    title: "Looking back at challenging periods in your life, how do you interpret your past resilience?",
    subtitle: "Self-narrative synthesis and earned confidence.",
    type: "single-choice",
    dimension: "Self-Acceptance",
    options: [
      { id: "conf_20_1", label: "I feel broken or permanently diminished by past hardships.", value: 1 },
      { id: "conf_20_2", label: "I try to forget past struggles and avoid thinking about them.", value: 2 },
      { id: "conf_20_3", label: "I see that I survived, which gives me reasonable confidence for the future.", value: 4 },
      { id: "conf_20_4", label: "I recognize my proven capacity to endure, adapt, and grow through adversity.", value: 5 },
    ],
  },
];
