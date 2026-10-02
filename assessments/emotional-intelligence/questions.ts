import { Question } from "@/types/question";

export const emotionalIntelligenceQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "eq_q1",
    title: "When experiencing a strong shift in mood, how easily can you pinpoint what triggered it?",
    subtitle: "Awareness of internal emotional states and their immediate causes.",
    type: "likert-scale",
    dimension: "Self-Awareness",
    options: [
      { id: "eq_1_1", label: "Very Difficult", value: 1 },
      { id: "eq_1_2", label: "Difficult", value: 2 },
      { id: "eq_1_3", label: "Moderate", value: 3 },
      { id: "eq_1_4", label: "Easy", value: 4 },
      { id: "eq_1_5", label: "Very Easy", value: 5 },
    ],
  },
  {
    id: "eq_q2",
    title: "I notice the physical sensations of stress or frustration (such as muscle tension or shallow breathing) before they turn into outward reactions.",
    subtitle: "Somatic awareness and early signal recognition.",
    type: "frequency",
    dimension: "Self-Awareness",
    options: [
      { id: "eq_2_1", label: "Almost Never", value: 1 },
      { id: "eq_2_2", label: "Rarely", value: 2 },
      { id: "eq_2_3", label: "Sometimes", value: 3 },
      { id: "eq_2_4", label: "Often", value: 4 },
      { id: "eq_2_5", label: "Almost Always", value: 5 },
    ],
  },
  {
    id: "eq_q3",
    title: "How clearly can you distinguish between nuanced emotions (for example, recognizing the difference between disappointment, jealousy, and fatigue)?",
    subtitle: "Emotional granularity and accurate self-labeling.",
    type: "single-choice",
    dimension: "Self-Awareness",
    options: [
      { id: "eq_3_1", label: "I usually just feel generally 'bad' or 'good' without clear distinctions.", value: 1 },
      { id: "eq_3_2", label: "I can usually identify basic emotions like anger or sadness after some time.", value: 2 },
      { id: "eq_3_3", label: "I identify most emotional nuances once I sit down to reflect.", value: 3 },
      { id: "eq_3_4", label: "I can accurately name and differentiate complex emotional blends in real-time.", value: 5 },
    ],
  },
  {
    id: "eq_q4",
    title: "I find myself reacting intensely to situations without understanding why I felt so strongly.",
    subtitle: "Reverse-scored self-awareness check.",
    type: "likert-scale",
    dimension: "Self-Awareness",
    reversed: true,
    options: [
      { id: "eq_4_1", label: "Strongly Agree", value: 1 },
      { id: "eq_4_2", label: "Agree", value: 2 },
      { id: "eq_4_3", label: "Neutral", value: 3 },
      { id: "eq_4_4", label: "Disagree", value: 4 },
      { id: "eq_4_5", label: "Strongly Disagree", value: 5 },
    ],
  },
  {
    id: "eq_q5",
    title: "When feeling overwhelmed or upset, how clearly do you understand how your mood might influence your decisions?",
    subtitle: "Understanding the impact of emotions on cognitive choices.",
    type: "single-choice",
    dimension: "Self-Awareness",
    options: [
      { id: "eq_5_1", label: "I rarely realize my mood influenced my choices until later.", value: 1 },
      { id: "eq_5_2", label: "I occasionally recognize the influence after making a hasty decision.", value: 2 },
      { id: "eq_5_3", label: "I am moderately mindful and pause if I feel extreme emotion.", value: 4 },
      { id: "eq_5_4", label: "I actively monitor how my current feelings shape my judgments before deciding.", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "eq_q6",
    title: "When an unexpected event disrupts your plans, how quickly can you regain composure?",
    subtitle: "Emotional flexibility and recovery speed under pressure.",
    type: "single-choice",
    dimension: "Emotional Regulation",
    options: [
      { id: "eq_6_1", label: "It throws off my entire day and lingers for hours.", value: 1 },
      { id: "eq_6_2", label: "It takes significant effort and quiet time to recalibrate.", value: 2 },
      { id: "eq_6_3", label: "I feel brief irritation, then adapt within a reasonable window.", value: 4 },
      { id: "eq_6_4", label: "I stay calm and quickly pivot toward practical solutions.", value: 5 },
    ],
  },
  {
    id: "eq_q7",
    title: "I can pause and choose my response when provoked, rather than lashing out impulsively.",
    subtitle: "Impulse control and emotional self-restraint.",
    type: "likert-scale",
    dimension: "Emotional Regulation",
    options: [
      { id: "eq_7_1", label: "Strongly Disagree", value: 1 },
      { id: "eq_7_2", label: "Disagree", value: 2 },
      { id: "eq_7_3", label: "Neutral", value: 3 },
      { id: "eq_7_4", label: "Agree", value: 4 },
      { id: "eq_7_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "eq_q8",
    title: "When receiving unexpected, direct criticism regarding your work or behavior, how do you naturally react?",
    subtitle: "Receptivity and emotional regulation during feedback.",
    type: "scenario",
    dimension: "Emotional Regulation",
    options: [
      { id: "eq_8_a", label: "I immediately feel defensive or shut down the conversation.", value: 1, description: "Defensive reactivity" },
      { id: "eq_8_b", label: "I nod along outwardly, but feel deeply unsettled or angry internally.", value: 2, description: "Internalized friction" },
      { id: "eq_8_c", label: "I take a breath, listen to the main points, and reflect before responding.", value: 4, description: "Measured reflection" },
      { id: "eq_8_d", label: "I welcome the perspective calmly and ask clarifying questions to extract useful insights.", value: 5, description: "Constructive curiosity" },
    ],
  },
  {
    id: "eq_q9",
    title: "I tend to replay frustrating conversations repeatedly in my head long after they have ended.",
    subtitle: "Rumination and post-event cognitive attachment (reverse-scored).",
    type: "frequency",
    dimension: "Emotional Regulation",
    reversed: true,
    options: [
      { id: "eq_9_1", label: "Very Frequently", value: 1 },
      { id: "eq_9_2", label: "Often", value: 2 },
      { id: "eq_9_3", label: "Occasionally", value: 3 },
      { id: "eq_9_4", label: "Rarely", value: 4 },
      { id: "eq_9_5", label: "Almost Never", value: 5 },
    ],
  },
  {
    id: "eq_q10",
    title: "When someone close to you is in a tense or irritable mood, how do you handle their energy?",
    subtitle: "Emotional boundary maintenance and co-regulation.",
    type: "single-choice",
    dimension: "Emotional Regulation",
    options: [
      { id: "eq_10_1", label: "I immediately absorb their tension and become equally irritable.", value: 1 },
      { id: "eq_10_2", label: "I feel uncomfortable and try to avoid them completely.", value: 2 },
      { id: "eq_10_3", label: "I notice their mood while keeping my own emotional grounding intact.", value: 4 },
      { id: "eq_10_4", label: "I stay grounded and offer a calm, steady presence to help diffuse the room.", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "eq_q11",
    title: "In a group discussion, how easily can you tell when someone feels left out or uncomfortable, even if they stay quiet?",
    subtitle: "Non-verbal cues and social atmosphere attunement.",
    type: "single-choice",
    dimension: "Social Awareness",
    options: [
      { id: "eq_11_1", label: "I rarely notice unless someone directly points it out.", value: 1 },
      { id: "eq_11_2", label: "I only notice if their discomfort becomes very obvious.", value: 2 },
      { id: "eq_11_3", label: "I often pick up on shifts in eye contact, body language, and tone.", value: 4 },
      { id: "eq_11_4", label: "I instinctively sense interpersonal dynamics and unexpressed feelings right away.", value: 5 },
    ],
  },
  {
    id: "eq_q12",
    title: "When listening to someone share a personal struggle, what is your primary focus?",
    subtitle: "Empathetic listening vs. rushing to solve or judge.",
    type: "scenario",
    dimension: "Empathy",
    options: [
      { id: "eq_12_a", label: "Interrupting with my own similar story to relate.", value: 1, description: "Self-referential listening" },
      { id: "eq_12_b", label: "Immediately giving unsolicited advice or solutions to fix the problem.", value: 2, description: "Immediate fixing orientation" },
      { id: "eq_12_c", label: "Listening quietly and trying to understand their feelings before offering thoughts.", value: 4, description: "Attentive listening" },
      { id: "eq_12_d", label: "Providing full emotional presence, validating their experience, and asking what support they need.", value: 5, description: "Empathetic attunement" },
    ],
  },
  {
    id: "eq_q13",
    title: "I can accurately understand someone’s perspective even when I strongly disagree with their opinions.",
    subtitle: "Cognitive empathy and perspective-taking capacity.",
    type: "likert-scale",
    dimension: "Empathy",
    options: [
      { id: "eq_13_1", label: "Strongly Disagree", value: 1 },
      { id: "eq_13_2", label: "Disagree", value: 2 },
      { id: "eq_13_3", label: "Neutral", value: 3 },
      { id: "eq_13_4", label: "Agree", value: 4 },
      { id: "eq_13_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "eq_q14",
    title: "You notice a colleague or friend giving unusually short replies and avoiding eye contact. What do you do?",
    subtitle: "Interpersonal tact and empathetic initiative.",
    type: "scenario",
    dimension: "Empathy",
    options: [
      { id: "eq_14_a", label: "Assume they are annoyed with me and distance myself.", value: 1, description: "Personalized assumption" },
      { id: "eq_14_b", label: "Ignore it; everyone has odd days.", value: 2, description: "Passive detachment" },
      { id: "eq_14_c", label: "Wait for an appropriate moment and gently ask if everything is okay.", value: 4, description: "Thoughtful check-in" },
      { id: "eq_14_d", label: "Create a safe, low-pressure space where they feel comfortable opening up if they wish.", value: 5, description: "Supportive holding" },
    ],
  },
  {
    id: "eq_q15",
    title: "I find it easy to adapt my communication style depending on whether I am speaking with an executive, a close friend, or an upset customer.",
    subtitle: "Contextual social adaptability.",
    type: "likert-scale",
    dimension: "Social Awareness",
    options: [
      { id: "eq_15_1", label: "Strongly Disagree", value: 1 },
      { id: "eq_15_2", label: "Disagree", value: 2 },
      { id: "eq_15_3", label: "Neutral", value: 3 },
      { id: "eq_15_4", label: "Agree", value: 4 },
      { id: "eq_15_5", label: "Strongly Agree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "eq_q16",
    title: "When a disagreement arises in a relationship or team, how do you typically approach resolution?",
    subtitle: "Conflict management and relationship repair.",
    type: "scenario",
    dimension: "Relationship Management",
    options: [
      { id: "eq_16_a", label: "Avoid the conversation entirely and hope the tension dissolves.", value: 1, description: "Conflict avoidance" },
      { id: "eq_16_b", label: "Focus heavily on proving my point and winning the argument.", value: 2, description: "Adversarial stance" },
      { id: "eq_16_c", label: "Express my view clearly while actively exploring common ground.", value: 4, description: "Collaborative problem-solving" },
      { id: "eq_16_d", label: "Facilitate open dialogue, address underlying emotional needs, and find win-win solutions.", value: 5, description: "Transformative resolution" },
    ],
  },
  {
    id: "eq_q17",
    title: "If you realize you hurt someone's feelings unintentionally, how do you handle it?",
    subtitle: "Accountability, repair, and relational humility.",
    type: "single-choice",
    dimension: "Relationship Management",
    options: [
      { id: "eq_17_1", label: "Defend my intentions ('I didn't mean it that way, you're overreacting').", value: 1 },
      { id: "eq_17_2", label: "Feel guilty internally but avoid bringing it up to escape awkwardness.", value: 2 },
      { id: "eq_17_3", label: "Offer a sincere apology once the atmosphere settles.", value: 4 },
      { id: "eq_17_4", label: "Promptly acknowledge the impact without making excuses, apologize, and ask how to make things right.", value: 5 },
    ],
  },
  {
    id: "eq_q18",
    title: "I can deliver honest, constructive feedback to others without damaging the relationship.",
    subtitle: "Tactful communication and relational integrity.",
    type: "likert-scale",
    dimension: "Relationship Management",
    options: [
      { id: "eq_18_1", label: "Strongly Disagree", value: 1 },
      { id: "eq_18_2", label: "Disagree", value: 2 },
      { id: "eq_18_3", label: "Neutral", value: 3 },
      { id: "eq_18_4", label: "Agree", value: 4 },
      { id: "eq_18_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "eq_q19",
    title: "How regularly do you reflect on your emotional patterns and interpersonal interactions to improve future responses?",
    subtitle: "Deliberate self-reflection and emotional growth habit.",
    type: "frequency",
    dimension: "Self-Awareness",
    options: [
      { id: "eq_19_1", label: "Rarely or never", value: 1 },
      { id: "eq_19_2", label: "Only after major conflicts or regrets", value: 2 },
      { id: "eq_19_3", label: "Periodically when I have quiet downtime", value: 3 },
      { id: "eq_19_4", label: "Regularly as part of my daily or weekly routine", value: 5 },
    ],
  },
  {
    id: "eq_q20",
    title: "When collaborating with someone who has an abrasive communication style, how do you sustain the working relationship?",
    subtitle: "Advanced relationship navigation and emotional resilience.",
    type: "scenario",
    dimension: "Relationship Management",
    options: [
      { id: "eq_10_a", label: "Retaliate with passive aggression or sarcasm.", value: 1, description: "Passive reactivity" },
      { id: "eq_10_b", label: "Completely detach and communicate only the bare minimum.", value: 2, description: "Withdrawal" },
      { id: "eq_10_c", label: "Focus purely on objective facts while maintaining professional courtesy.", value: 4, description: "Professional boundary" },
      { id: "eq_10_d", label: "Separate their tone from their intent, set respectful boundaries when needed, and maintain constructive alignment.", value: 5, description: "Strategic composure" },
    ],
  },
];
