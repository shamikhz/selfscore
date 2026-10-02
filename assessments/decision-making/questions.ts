import { Question } from "@/types/question";

export const decisionMakingQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "dm_q1",
    title: "When facing a major personal or career decision, what is your initial instinct?",
    subtitle: "Baseline cognitive approach to open-ended choices.",
    type: "single-choice",
    dimension: "Analytical Thinking",
    options: [
      { id: "dm_1_1", label: "Trust my immediate gut sensation and move forward.", value: 2 },
      { id: "dm_1_2", label: "Talk through the situation casually with friends or family.", value: 3 },
      { id: "dm_1_3", label: "Start researching and listing out structured facts, pros, and cons.", value: 5 },
      { id: "dm_1_4", label: "Hold off until deadlines force a conclusion.", value: 1 },
    ],
  },
  {
    id: "dm_q2",
    title: "I feel comfortable making important choices even when I have incomplete information.",
    subtitle: "Tolerance for ambiguity and speed of conviction.",
    type: "likert-scale",
    dimension: "Decisiveness",
    options: [
      { id: "dm_2_1", label: "Strongly Disagree", value: 1 },
      { id: "dm_2_2", label: "Disagree", value: 2 },
      { id: "dm_2_3", label: "Neutral", value: 3 },
      { id: "dm_2_4", label: "Agree", value: 4 },
      { id: "dm_2_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "dm_q3",
    title: "How frequently do your intuitive 'gut hunches' lead to outcomes you are satisfied with?",
    subtitle: "Intuitive calibration and experiential pattern matching.",
    type: "frequency",
    dimension: "Intuition",
    options: [
      { id: "dm_3_1", label: "Rarely or never", value: 1 },
      { id: "dm_3_2", label: "Occasionally", value: 2 },
      { id: "dm_3_3", label: "About half the time", value: 3 },
      { id: "dm_3_4", label: "Most of the time", value: 4 },
      { id: "dm_3_5", label: "Almost always", value: 5 },
    ],
  },
  {
    id: "dm_q4",
    title: "Before making a financial or strategic commitment, how thoroughly do you map potential worst-case scenarios?",
    subtitle: "Proactive risk calculation and downside evaluation.",
    type: "single-choice",
    dimension: "Risk Awareness",
    options: [
      { id: "dm_4_1", label: "I rarely think about downsides; I stay optimistic.", value: 1 },
      { id: "dm_4_2", label: "I glance at obvious risks but don't dwell on them.", value: 2 },
      { id: "dm_4_3", label: "I deliberately list major risks and establish backup options.", value: 4 },
      { id: "dm_4_4", label: "I conduct a detailed stress test of multiple potential points of failure.", value: 5 },
    ],
  },
  {
    id: "dm_q5",
    title: "I often find myself overthinking simple choices (like choosing a meal or a purchase) long past the point of necessity.",
    subtitle: "Cognitive hesitation and over-analysis (reverse-scored for Decisiveness).",
    type: "likert-scale",
    dimension: "Decisiveness",
    reversed: true,
    options: [
      { id: "dm_5_1", label: "Strongly Agree", value: 1 },
      { id: "dm_5_2", label: "Agree", value: 2 },
      { id: "dm_5_3", label: "Neutral", value: 3 },
      { id: "dm_5_4", label: "Disagree", value: 4 },
      { id: "dm_5_5", label: "Strongly Disagree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "dm_q6",
    title: "When comparing two competitive job offers or major opportunities, what is your standard method?",
    subtitle: "Analytical rigor vs. intuitive impression in complex trade-offs.",
    type: "scenario",
    dimension: "Analytical Thinking",
    options: [
      { id: "dm_6_a", label: "Go with whichever option excites my gut the most immediately.", value: 2, description: "Intuitive choice" },
      { id: "dm_6_b", label: "Build a weighted evaluation matrix scoring criteria like growth, pay, culture, and commute.", value: 5, description: "Systematic matrix" },
      { id: "dm_6_c", label: "Ask a mentor or partner to tell me what they think I should do.", value: 2, description: "External consensus" },
      { id: "dm_6_d", label: "Review key facts, write a brief comparison list, and decide within 24 hours.", value: 4, description: "Pragmatic balanced evaluation" },
    ],
  },
  {
    id: "dm_q7",
    title: "Once you have finalized a decision and taken action, how often do you second-guess yourself?",
    subtitle: "Post-decision confidence and mental closure (reverse-scored for Reflection/Decisiveness).",
    type: "frequency",
    dimension: "Decisiveness",
    reversed: true,
    options: [
      { id: "dm_7_1", label: "Almost always (constant doubt)", value: 1 },
      { id: "dm_7_2", label: "Frequently", value: 2 },
      { id: "dm_7_3", label: "Occasionally", value: 3 },
      { id: "dm_7_4", label: "Rarely", value: 4 },
      { id: "dm_7_5", label: "Almost never (committed once decided)", value: 5 },
    ],
  },
  {
    id: "dm_q8",
    title: "How do you evaluate potential risks when considering an unfamiliar opportunity?",
    subtitle: "Risk awareness calibration.",
    type: "single-choice",
    dimension: "Risk Awareness",
    options: [
      { id: "dm_8_1", label: "I jump in and assume I'll figure out problems as they occur.", value: 2 },
      { id: "dm_8_2", label: "I avoid anything that feels risky or unstable.", value: 1 },
      { id: "dm_8_3", label: "I weigh the upside against the downside and proceed if the downside is survivable.", value: 5 },
      { id: "dm_8_4", label: "I seek absolute certainty before committing any resources.", value: 2 },
    ],
  },
  {
    id: "dm_q9",
    title: "I deliberately take time after major projects or decisions to evaluate what worked and what I would do differently.",
    subtitle: "Structured post-decision reflection and experiential learning.",
    type: "likert-scale",
    dimension: "Reflection",
    options: [
      { id: "dm_9_1", label: "Strongly Disagree", value: 1 },
      { id: "dm_9_2", label: "Disagree", value: 2 },
      { id: "dm_9_3", label: "Neutral", value: 3 },
      { id: "dm_9_4", label: "Agree", value: 4 },
      { id: "dm_9_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "dm_q10",
    title: "When meeting a new business partner or collaborator, how heavily do you weigh your initial vibe alongside their verified credentials?",
    subtitle: "Synthesis of intuitive signals with factual verification.",
    type: "single-choice",
    dimension: "Intuition",
    options: [
      { id: "dm_10_1", label: "Credentials only; gut feelings are irrelevant to me.", value: 2 },
      { id: "dm_10_2", label: "Initial vibe only; if energy feels off, I walk immediately.", value: 3 },
      { id: "dm_10_3", label: "I use intuition as an initial filter and verify through concrete background data.", value: 5 },
      { id: "dm_10_4", label: "I rarely think about either and adapt as we work.", value: 1 },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "dm_q11",
    title: "You are in a critical meeting and must choose between two strategies within 10 minutes. How do you respond?",
    subtitle: "Decisiveness under urgent time pressure.",
    type: "scenario",
    dimension: "Decisiveness",
    options: [
      { id: "dm_11_a", label: "Freeze or delay the meeting to gather more data.", value: 1, description: "Avoidant paralysis" },
      { id: "dm_11_b", label: "Default to whichever strategy has the least vocal opposition.", value: 2, description: "Passive compliance" },
      { id: "dm_11_c", label: "Quickly synthesize the key trade-offs, choose the highest-conviction path, and commit.", value: 5, description: "Crisp leadership" },
      { id: "dm_11_d", label: "Flip a coin or make an arbitrary snap call to keep things moving.", value: 2, description: "Hasty closure" },
    ],
  },
  {
    id: "dm_q12",
    title: "I actively seek out data, statistics, and counterarguments that challenge my preferred conclusion.",
    subtitle: "Mitigating confirmation bias through analytical discipline.",
    type: "likert-scale",
    dimension: "Analytical Thinking",
    options: [
      { id: "dm_12_1", label: "Strongly Disagree", value: 1 },
      { id: "dm_12_2", label: "Disagree", value: 2 },
      { id: "dm_12_3", label: "Neutral", value: 3 },
      { id: "dm_12_4", label: "Agree", value: 4 },
      { id: "dm_12_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "dm_q13",
    title: "A past choice produced an unexpected negative result due to bad luck rather than poor reasoning. How do you process it?",
    subtitle: "Evaluating process vs. outcome in reflective thinking.",
    type: "single-choice",
    dimension: "Reflection",
    options: [
      { id: "dm_13_1", label: "I dwell in regret and become overly fearful of making similar choices.", value: 1 },
      { id: "dm_13_2", label: "I brush it off without examining what occurred.", value: 2 },
      { id: "dm_13_3", label: "I distinguish between decision quality and random variance to extract genuine lessons.", value: 5 },
      { id: "dm_13_4", label: "I assume someone else was at fault.", value: 1 },
    ],
  },
  {
    id: "dm_q14",
    title: "When the potential upside of an opportunity is huge, but failure could set you back significantly, what is your approach?",
    subtitle: "Asymmetric risk assessment and reward balancing.",
    type: "scenario",
    dimension: "Risk Awareness",
    options: [
      { id: "dm_14_a", label: "Go all-in without hedging; fortune favors the bold.", value: 2, description: "Reckless optimism" },
      { id: "dm_14_b", label: "Decline immediately to protect against any downside.", value: 2, description: "Extreme risk aversion" },
      { id: "dm_14_c", label: "Structure the endeavor to cap downside risk while preserving significant upside exposure.", value: 5, description: "Asymmetric risk design" },
      { id: "dm_14_d", label: "Procrastinate on the decision until the window expires.", value: 1, description: "Decision default" },
    ],
  },
  {
    id: "dm_q15",
    title: "I can sense when a team conversation is avoiding the real core issue, even before it is spoken.",
    subtitle: "Intuitive perception in interpersonal decision contexts.",
    type: "likert-scale",
    dimension: "Intuition",
    options: [
      { id: "dm_15_1", label: "Strongly Disagree", value: 1 },
      { id: "dm_15_2", label: "Disagree", value: 2 },
      { id: "dm_15_3", label: "Neutral", value: 3 },
      { id: "dm_15_4", label: "Agree", value: 4 },
      { id: "dm_15_5", label: "Strongly Agree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "dm_q16",
    title: "How do you handle 'sunk costs' (time or money already spent on an idea that isn't working)?",
    subtitle: "Rational detachment and cognitive flexibility under failure.",
    type: "single-choice",
    dimension: "Analytical Thinking",
    options: [
      { id: "dm_16_1", label: "Keep investing more because I cannot bear the thought of wasting past effort.", value: 1 },
      { id: "dm_16_2", label: "Feel conflicted and drag out the process for months.", value: 2 },
      { id: "dm_16_3", label: "Acknowledge the sunk cost, objectively evaluate forward prospects, and pivot if needed.", value: 5 },
      { id: "dm_16_4", label: "Immediately abandon everything without a transition plan.", value: 2 },
    ],
  },
  {
    id: "dm_q17",
    title: "I maintain a clear understanding of my non-negotiable core values when making high-consequence life choices.",
    subtitle: "Foundational alignment and ethical decisiveness.",
    type: "likert-scale",
    dimension: "Decisiveness",
    options: [
      { id: "dm_17_1", label: "Strongly Disagree", value: 1 },
      { id: "dm_17_2", label: "Disagree", value: 2 },
      { id: "dm_17_3", label: "Neutral", value: 3 },
      { id: "dm_17_4", label: "Agree", value: 4 },
      { id: "dm_17_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "dm_q18",
    title: "When your logical analysis suggests one route, but your intuition strongly warns against it, what do you do?",
    subtitle: "Integration of analytical models and intuitive alarm systems.",
    type: "scenario",
    dimension: "Intuition",
    options: [
      { id: "dm_18_a", label: "Ignore intuition completely and follow the spreadsheet blindly.", value: 2, description: "Dogmatic analysis" },
      { id: "dm_18_b", label: "Abandon the logical plan instantly based purely on fear.", value: 2, description: "Reactive impulse" },
      { id: "dm_18_c", label: "Pause and investigate what subtle pattern or hidden assumption is triggering the intuitive warning.", value: 5, description: "Holistic synthesis" },
      { id: "dm_18_d", label: "Ask three other people to decide for me.", value: 1, description: "Decision abdication" },
    ],
  },
  {
    id: "dm_q19",
    title: "How consistently do you review the second- and third-order consequences of your major decisions before executing?",
    subtitle: "Multi-order systemic impact evaluation.",
    type: "frequency",
    dimension: "Risk Awareness",
    options: [
      { id: "dm_19_1", label: "Almost Never (focus only on immediate results)", value: 1 },
      { id: "dm_19_2", label: "Rarely", value: 2 },
      { id: "dm_19_3", label: "Occasionally", value: 3 },
      { id: "dm_19_4", label: "Frequently", value: 4 },
      { id: "dm_19_5", label: "Consistently on all consequential choices", value: 5 },
    ],
  },
  {
    id: "dm_q20",
    title: "When you receive fresh evidence showing that a previous strategy you championed is flawed, how do you respond?",
    subtitle: "Intellectual humility, updating priors, and reflective agility.",
    type: "single-choice",
    dimension: "Reflection",
    options: [
      { id: "dm_20_1", label: "Defend my original decision aggressively to save face.", value: 1 },
      { id: "dm_20_2", label: "Reluctantly concede only when pressured by others.", value: 2 },
      { id: "dm_20_3", label: "Transparently update my position, communicate the pivot, and incorporate new learnings.", value: 5 },
      { id: "dm_20_4", label: "Quietly step away from the project entirely.", value: 1 },
    ],
  },
];
