import { Question } from "@/types/question";

export const burnoutRiskQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "bo_q1",
    title: "How often do you wake up feeling rested and genuinely energized for the day ahead?",
    subtitle: "Baseline morning energy and restorative vitality (reversed).",
    type: "frequency",
    dimension: "Energy & Exhaustion",
    reversed: true,
    options: [
      { id: "bo_1_1", label: "Almost Every Morning", value: 1 },
      { id: "bo_1_2", label: "Most Mornings", value: 2 },
      { id: "bo_1_3", label: "Some Mornings", value: 3 },
      { id: "bo_1_4", label: "Rarely", value: 4 },
      { id: "bo_1_5", label: "Almost Never", value: 5 },
    ],
  },
  {
    id: "bo_q2",
    title: "At the end of a typical workday, I feel completely depleted mentally and emotionally.",
    subtitle: "Daily cognitive load and cumulative emotional drain.",
    type: "likert-scale",
    dimension: "Energy & Exhaustion",
    options: [
      { id: "bo_2_1", label: "Strongly Disagree", value: 1 },
      { id: "bo_2_2", label: "Disagree", value: 2 },
      { id: "bo_2_3", label: "Neutral", value: 3 },
      { id: "bo_2_4", label: "Agree", value: 4 },
      { id: "bo_2_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "bo_q3",
    title: "How would you describe your current workload compared to your sustainable capacity?",
    subtitle: "Subjective perception of daily volume.",
    type: "single-choice",
    dimension: "Workload Pressure",
    options: [
      { id: "bo_3_1", label: "Comfortably within my limits with ample breathing room.", value: 1 },
      { id: "bo_3_2", label: "Challenging but manageable on most days.", value: 2 },
      { id: "bo_3_3", label: "Consistently stretched right at the upper edge of my limit.", value: 4 },
      { id: "bo_3_4", label: "Chronically overwhelming and beyond what I can sustain long term.", value: 5 },
    ],
  },
  {
    id: "bo_q4",
    title: "I maintain a genuine sense of enthusiasm and curiosity about my daily projects and goals.",
    subtitle: "Core intrinsic motivation and task engagement (reversed).",
    type: "likert-scale",
    dimension: "Motivation",
    reversed: true,
    options: [
      { id: "bo_4_1", label: "Strongly Agree", value: 1 },
      { id: "bo_4_2", label: "Agree", value: 2 },
      { id: "bo_4_3", label: "Neutral", value: 3 },
      { id: "bo_4_4", label: "Disagree", value: 4 },
      { id: "bo_4_5", label: "Strongly Disagree", value: 5 },
    ],
  },
  {
    id: "bo_q5",
    title: "How often do you catch yourself feeling cynical, detached, or numb about commitments you used to care deeply about?",
    subtitle: "Emotional detachment and protective distancing.",
    type: "frequency",
    dimension: "Motivation",
    options: [
      { id: "bo_5_1", label: "Never or rarely", value: 1 },
      { id: "bo_5_2", label: "Occasionally during stressful weeks", value: 2 },
      { id: "bo_5_3", label: "Fairly often", value: 4 },
      { id: "bo_5_4", label: "Almost constantly", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "bo_q6",
    title: "How do you typically spend your lunch or mid-day break during busy periods?",
    subtitle: "Mid-day boundary management and rest habits.",
    type: "scenario",
    dimension: "Boundaries",
    options: [
      { id: "bo_6_a", label: "I take a dedicated 30–60 minute screen-free break to recharge.", value: 1, description: "Protected recovery" },
      { id: "bo_6_b", label: "I take a quick 15-minute meal break away from my desk.", value: 2, description: "Moderate pause" },
      { id: "bo_6_c", label: "I eat while answering emails, messages, or doing tasks.", value: 4, description: "Merged work break" },
      { id: "bo_6_d", label: "I routinely skip lunch entirely to power through my to-do list.", value: 5, description: "Sacrificed rest" },
    ],
  },
  {
    id: "bo_q7",
    title: "I find it difficult to say 'no' when asked to take on additional responsibilities, even when my plate is full.",
    subtitle: "Capacity boundary negotiation.",
    type: "likert-scale",
    dimension: "Boundaries",
    options: [
      { id: "bo_7_1", label: "Strongly Disagree", value: 1 },
      { id: "bo_7_2", label: "Disagree", value: 2 },
      { id: "bo_7_3", label: "Neutral", value: 3 },
      { id: "bo_7_4", label: "Agree", value: 4 },
      { id: "bo_7_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "bo_q8",
    title: "How often do you check work messages, emails, or project dashboards late in the evening or on weekends?",
    subtitle: "Digital boundary permeability and after-hours connection.",
    type: "frequency",
    dimension: "Boundaries",
    options: [
      { id: "bo_8_1", label: "Almost Never (strict boundary)", value: 1 },
      { id: "bo_8_2", label: "Rarely (only scheduled emergencies)", value: 2 },
      { id: "bo_8_3", label: "Occasionally", value: 3 },
      { id: "bo_8_4", label: "Frequently (every evening)", value: 4 },
      { id: "bo_8_5", label: "Constantly throughout the night/weekend", value: 5 },
    ],
  },
  {
    id: "bo_q9",
    title: "I have reliable, non-work activities (such as hobbies, exercise, or creative outlets) that genuinely replenish my energy.",
    subtitle: "Active restorative habits (reversed).",
    type: "likert-scale",
    dimension: "Recovery",
    reversed: true,
    options: [
      { id: "bo_9_1", label: "Strongly Agree", value: 1 },
      { id: "bo_9_2", label: "Agree", value: 2 },
      { id: "bo_9_3", label: "Neutral", value: 3 },
      { id: "bo_9_4", label: "Disagree", value: 4 },
      { id: "bo_9_5", label: "Strongly Disagree", value: 5 },
    ],
  },
  {
    id: "bo_q10",
    title: "When you notice persistent fatigue or headache signals during a long work session, what do you usually do?",
    subtitle: "Somatic response and physical pacing.",
    type: "single-choice",
    dimension: "Recovery",
    options: [
      { id: "bo_10_1", label: "Stop, hydrate, stretch, and adjust my posture or workload.", value: 1 },
      { id: "bo_10_2", label: "Take a brief 5-minute break and return to work.", value: 2 },
      { id: "bo_10_3", label: "Consume more caffeine or sugar to push through.", value: 4 },
      { id: "bo_10_4", label: "Ignore the physical signals completely and keep working indefinitely.", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "bo_q11",
    title: "During intense project deadlines or crunch periods, how does your mental focus hold up?",
    subtitle: "Cognitive stamina and strain tolerance.",
    type: "scenario",
    dimension: "Workload Pressure",
    options: [
      { id: "bo_11_a", label: "I pace myself sustainably with short pauses and finish smoothly.", value: 1, description: "Sustainable pacing" },
      { id: "bo_11_b", label: "I feel temporary fatigue but recover quickly once the deadline passes.", value: 2, description: "Resilient sprint" },
      { id: "bo_11_c", label: "I experience brain fog, irritability, and struggle to concentrate.", value: 4, description: "Cognitive strain" },
      { id: "bo_11_d", label: "I feel paralyzed, dread opening my computer, and make frequent errors.", value: 5, description: "High overload" },
    ],
  },
  {
    id: "bo_q12",
    title: "When you finally have a free weekend or vacation day, how easily can you mentally disconnect from work responsibilities?",
    subtitle: "Psychological detachment and mental decompression (reversed).",
    type: "single-choice",
    dimension: "Recovery",
    reversed: true,
    options: [
      { id: "bo_12_1", label: "Very easily — I leave work entirely at the door.", value: 5 },
      { id: "bo_12_2", label: "Reasonably well after an initial couple of hours.", value: 4 },
      { id: "bo_12_3", label: "With difficulty — work thoughts intrude throughout the day.", value: 2 },
      { id: "bo_12_4", label: "Almost impossible — I feel persistent guilt or anxiety when not working.", value: 1 },
    ],
  },
  {
    id: "bo_q13",
    title: "I feel that no matter how much work I complete in a day, it is never quite enough.",
    subtitle: "Internalized urgency and unrelenting standards.",
    type: "likert-scale",
    dimension: "Workload Pressure",
    options: [
      { id: "bo_13_1", label: "Strongly Disagree", value: 1 },
      { id: "bo_13_2", label: "Disagree", value: 2 },
      { id: "bo_13_3", label: "Neutral", value: 3 },
      { id: "bo_13_4", label: "Agree", value: 4 },
      { id: "bo_13_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "bo_q14",
    title: "A colleague or family member expresses concern that you are working too much or look exhausted. How do you respond?",
    subtitle: "External perception attunement and self-awareness.",
    type: "scenario",
    dimension: "Energy & Exhaustion",
    options: [
      { id: "bo_14_a", label: "I thank them, take the feedback seriously, and schedule rest.", value: 1, description: "Adaptive receptive" },
      { id: "bo_14_b", label: "I acknowledge it but feel it's just a temporary busy season.", value: 2, description: "Contextual awareness" },
      { id: "bo_14_c", label: "I dismiss their comments defensively: 'I have no choice, it has to get done.'", value: 4, description: "Defensive rationalization" },
      { id: "bo_14_d", label: "I feel secretly defeated because I know they are right but feel trapped.", value: 5, description: "Trapped helplessness" },
    ],
  },
  {
    id: "bo_q15",
    title: "I celebrate my personal and professional accomplishments rather than immediately moving to the next urgent task.",
    subtitle: "Milestone appreciation and reward cycles (reversed).",
    type: "frequency",
    dimension: "Motivation",
    reversed: true,
    options: [
      { id: "bo_15_1", label: "Consistently on all milestones", value: 1 },
      { id: "bo_15_2", label: "Frequently", value: 2 },
      { id: "bo_15_3", label: "Occasionally", value: 3 },
      { id: "bo_15_4", label: "Rarely", value: 4 },
      { id: "bo_15_5", label: "Almost Never (straight to the next crisis)", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "bo_q16",
    title: "How often do you feel a sense of dread or heavy resistance on Sunday evenings or before the work week begins?",
    subtitle: "Anticipatory anxiety and weekly dread cycles.",
    type: "frequency",
    dimension: "Energy & Exhaustion",
    options: [
      { id: "bo_16_1", label: "Almost Never", value: 1 },
      { id: "bo_16_2", label: "Rarely", value: 2 },
      { id: "bo_16_3", label: "Occasionally", value: 3 },
      { id: "bo_16_4", label: "Frequently", value: 4 },
      { id: "bo_16_5", label: "Almost Every Week", value: 5 },
    ],
  },
  {
    id: "bo_q17",
    title: "I can comfortably step away from my work devices for an entire day without feeling anxious about what I might miss.",
    subtitle: "Disconnection confidence and autonomic regulation (reversed).",
    type: "likert-scale",
    dimension: "Boundaries",
    reversed: true,
    options: [
      { id: "bo_17_1", label: "Strongly Agree", value: 1 },
      { id: "bo_17_2", label: "Agree", value: 2 },
      { id: "bo_17_3", label: "Neutral", value: 3 },
      { id: "bo_17_4", label: "Disagree", value: 4 },
      { id: "bo_17_5", label: "Strongly Disagree", value: 5 },
    ],
  },
  {
    id: "bo_q18",
    title: "When you experience a setback or unexpected friction in your work, how does it affect your emotional resilience?",
    subtitle: "Tolerance for daily operational friction.",
    type: "single-choice",
    dimension: "Energy & Exhaustion",
    options: [
      { id: "bo_18_1", label: "I take it in stride and treat it as a standard problem to solve.", value: 1 },
      { id: "bo_18_2", label: "It briefly annoys me, but I adapt without lasting impact.", value: 2 },
      { id: "bo_18_3", label: "Minor issues feel disproportionately frustrating or exhausting.", value: 4 },
      { id: "bo_18_4", label: "Small inconveniences feel like the absolute final straw.", value: 5 },
    ],
  },
  {
    id: "bo_q19",
    title: "How would you rate the current balance between your work/responsibilities and your personal health/relationships?",
    subtitle: "Holistic life integration balance (reversed).",
    type: "single-choice",
    dimension: "Workload Pressure",
    reversed: true,
    options: [
      { id: "bo_19_1", label: "Very well-balanced and mutually enriching.", value: 5 },
      { id: "bo_19_2", label: "Reasonably balanced with occasional busy crunches.", value: 4 },
      { id: "bo_19_3", label: "Tilted toward work; personal life frequently takes a back seat.", value: 2 },
      { id: "bo_19_4", label: "Severely unbalanced; personal wellbeing and relationships are neglected.", value: 1 },
    ],
  },
  {
    id: "bo_q20",
    title: "I have clear, intentional strategies to decompress and restore my mental clarity when feeling stretched.",
    subtitle: "Proactive restoration agency (reversed).",
    type: "likert-scale",
    dimension: "Recovery",
    reversed: true,
    options: [
      { id: "bo_20_1", label: "Strongly Agree", value: 1 },
      { id: "bo_20_2", label: "Agree", value: 2 },
      { id: "bo_20_3", label: "Neutral", value: 3 },
      { id: "bo_20_4", label: "Disagree", value: 4 },
      { id: "bo_20_5", label: "Strongly Disagree", value: 5 },
    ],
  },
];
