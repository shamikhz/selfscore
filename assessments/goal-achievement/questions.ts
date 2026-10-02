import { Question } from "@/types/question";

export const goalAchievementQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "ga_q1",
    title: "How clearly defined are your top 2–3 personal or professional goals for the next 6 to 12 months?",
    subtitle: "Goal clarity and concrete vision.",
    type: "single-choice",
    dimension: "Goal Clarity",
    options: [
      { id: "ga_1_1", label: "Very vague or non-existent; I take things as they come.", value: 1 },
      { id: "ga_1_2", label: "I have general aspirations in my head but nothing written down.", value: 2 },
      { id: "ga_1_3", label: "I have written goals with general timelines.", value: 4 },
      { id: "ga_1_4", label: "Crystal clear with specific metrics, deadlines, and milestone reviews.", value: 5 },
    ],
  },
  {
    id: "ga_q2",
    title: "I frequently start new projects with high excitement, but lose interest before finishing them.",
    subtitle: "Early excitement vs. follow-through endurance (reversed).",
    type: "likert-scale",
    dimension: "Follow-Through",
    reversed: true,
    options: [
      { id: "ga_2_1", label: "Strongly Agree", value: 1 },
      { id: "ga_2_2", label: "Agree", value: 2 },
      { id: "ga_2_3", label: "Neutral", value: 3 },
      { id: "ga_2_4", label: "Disagree", value: 4 },
      { id: "ga_2_5", label: "Strongly Disagree (committed finisher)", value: 5 },
    ],
  },
  {
    id: "ga_q3",
    title: "When setting an ambitious goal, how naturally do you break it down into smaller weekly and daily actionable steps?",
    subtitle: "Milestone decomposition and tactical planning.",
    type: "single-choice",
    dimension: "Planning",
    options: [
      { id: "ga_3_1", label: "I never break it down; I just hope I will figure it out.", value: 1 },
      { id: "ga_3_2", label: "I think about the next step or two when I feel like it.", value: 2 },
      { id: "ga_3_3", label: "I map out basic milestones and phases reasonably well.", value: 4 },
      { id: "ga_3_4", label: "I systematically decompose the entire roadmap into bite-sized daily micro-actions.", value: 5 },
    ],
  },
  {
    id: "ga_q4",
    title: "I maintain steady daily or weekly momentum toward my goals even when I do not feel motivated.",
    subtitle: "Discipline and operational consistency.",
    type: "likert-scale",
    dimension: "Consistency",
    options: [
      { id: "ga_4_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_4_2", label: "Disagree", value: 2 },
      { id: "ga_4_3", label: "Neutral", value: 3 },
      { id: "ga_4_4", label: "Agree", value: 4 },
      { id: "ga_4_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q5",
    title: "How often do you postpone high-priority goal actions in favor of easy, low-value busywork?",
    subtitle: "Procrastination and priority avoidance (reversed).",
    type: "frequency",
    dimension: "Execution",
    reversed: true,
    options: [
      { id: "ga_5_1", label: "Almost Daily", value: 1 },
      { id: "ga_5_2", label: "Frequently", value: 2 },
      { id: "ga_5_3", label: "Occasionally", value: 3 },
      { id: "ga_5_4", label: "Rarely", value: 4 },
      { id: "ga_5_5", label: "Almost Never (tackle high-impact first)", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "ga_q6",
    title: "How do you track and measure ongoing progress toward your key targets?",
    subtitle: "Tracking systems and objective feedback loops.",
    type: "scenario",
    dimension: "Planning",
    options: [
      { id: "ga_6_a", label: "I don't track anything; I rely on memory.", value: 1, description: "No tracking" },
      { id: "ga_6_b", label: "I check in mentally every few months when I remember.", value: 2, description: "Occasional recall" },
      { id: "ga_6_c", label: "I keep a simple to-do list or journal where I tick off progress.", value: 4, description: "Active checklist" },
      { id: "ga_6_d", label: "I use a structured tracking system with weekly metric reviews and milestone checkpoints.", value: 5, description: "Systematic accountability" },
    ],
  },
  {
    id: "ga_q7",
    title: "I can say 'no' to exciting new distractions that do not align with my core current goals.",
    subtitle: "Strategic elimination and focus defense.",
    type: "likert-scale",
    dimension: "Goal Clarity",
    options: [
      { id: "ga_7_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_7_2", label: "Disagree", value: 2 },
      { id: "ga_7_3", label: "Neutral", value: 3 },
      { id: "ga_7_4", label: "Agree", value: 4 },
      { id: "ga_7_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q8",
    title: "When you establish a personal deadline for a milestone, how reliably do you meet it?",
    subtitle: "Internal deadline integrity and accountability.",
    type: "frequency",
    dimension: "Execution",
    options: [
      { id: "ga_8_1", label: "Rarely (deadlines always slip indefinitely)", value: 1 },
      { id: "ga_8_2", label: "About half the time", value: 2 },
      { id: "ga_8_3", label: "Most of the time with minor delays", value: 4 },
      { id: "ga_8_4", label: "Consistently on or ahead of time", value: 5 },
    ],
  },
  {
    id: "ga_q9",
    title: "I have built recurring daily or weekly habit routines that automate progress toward my long-term vision.",
    subtitle: "Habit scaffolding and compound consistency.",
    type: "likert-scale",
    dimension: "Consistency",
    options: [
      { id: "ga_9_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_9_2", label: "Disagree", value: 2 },
      { id: "ga_9_3", label: "Neutral", value: 3 },
      { id: "ga_9_4", label: "Agree", value: 4 },
      { id: "ga_9_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q10",
    title: "When you reach the final 10% of a major project (polishing, formatting, submitting), what happens?",
    subtitle: "Last-mile follow-through stamina.",
    type: "scenario",
    dimension: "Follow-Through",
    options: [
      { id: "ga_10_a", label: "I lose steam and let the project linger unfinished for months.", value: 1, description: "Stalled finish" },
      { id: "ga_10_b", label: "I rush through sloppy details just to be done with it.", value: 2, description: "Compromised finish" },
      { id: "ga_10_c", label: "I push through the tedious details and deliver a solid final result.", value: 4, description: "Reliable completion" },
      { id: "ga_10_d", label: "I execute the final stretch with excellence and ensure clean delivery.", value: 5, description: "Masterful delivery" },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "ga_q11",
    title: "You encounter an unexpected obstacle that derails your initial plan. How do you respond?",
    subtitle: "Adaptive problem solving and goal persistence.",
    type: "scenario",
    dimension: "Execution",
    options: [
      { id: "ga_11_a", label: "Give up entirely and conclude it was not meant to be.", value: 1, description: "Premature abandonment" },
      { id: "ga_11_b", label: "Complain and pause all effort for weeks.", value: 2, description: "Protracted delay" },
      { id: "ga_11_c", label: "Analyze the obstacle and adjust the plan to navigate around it.", value: 4, description: "Pragmatic pivot" },
      { id: "ga_11_d", label: "Treat the obstacle as valuable feedback, iterate strategy rapidly, and redouble effort.", value: 5, description: "Resilient iteration" },
    ],
  },
  {
    id: "ga_q12",
    title: "I connect my daily tasks to the bigger 'why' behind my long-term aspirations.",
    subtitle: "Meaning alignment and purpose anchoring.",
    type: "likert-scale",
    dimension: "Goal Clarity",
    options: [
      { id: "ga_12_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_12_2", label: "Disagree", value: 2 },
      { id: "ga_12_3", label: "Neutral", value: 3 },
      { id: "ga_12_4", label: "Agree", value: 4 },
      { id: "ga_12_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q13",
    title: "When your schedule becomes overwhelmingly hectic, how do you protect time for your primary goals?",
    subtitle: "Time allocation prioritization under constraints.",
    type: "single-choice",
    dimension: "Planning",
    options: [
      { id: "ga_13_1", label: "My personal goals are the very first thing I drop.", value: 1 },
      { id: "ga_13_2", label: "I try to squeeze in a few minutes late at night when exhausted.", value: 2 },
      { id: "ga_13_3", label: "I ruthlessly trim low-priority tasks and protect a dedicated goal block.", value: 5 },
      { id: "ga_13_4", label: "I feel overwhelmed and do nothing on any front.", value: 1 },
    ],
  },
  {
    id: "ga_q14",
    title: "How consistently do you return to your habits after missing a day or two?",
    subtitle: "Bouncing back from habit friction ('Never miss twice' rule).",
    type: "frequency",
    dimension: "Consistency",
    options: [
      { id: "ga_14_1", label: "Rarely (missing one day usually derails the entire habit for months)", value: 1 },
      { id: "ga_14_2", label: "Sometimes after a prolonged struggle", value: 2 },
      { id: "ga_14_3", label: "Most of the time within a few days", value: 4 },
      { id: "ga_14_4", label: "Almost always (I reset and resume immediately without guilt)", value: 5 },
    ],
  },
  {
    id: "ga_q15",
    title: "I have a proven track record of bringing long-term commitments (such as degrees, fitness goals, or products) across the finish line.",
    subtitle: "Historical accomplishment verification.",
    type: "likert-scale",
    dimension: "Follow-Through",
    options: [
      { id: "ga_15_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_15_2", label: "Disagree", value: 2 },
      { id: "ga_15_3", label: "Neutral", value: 3 },
      { id: "ga_15_4", label: "Agree", value: 4 },
      { id: "ga_15_5", label: "Strongly Agree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "ga_q16",
    title: "When you complete a major goal or project, what is your standard next step?",
    subtitle: "Post-completion reflection and consolidation.",
    type: "scenario",
    dimension: "Goal Clarity",
    options: [
      { id: "ga_16_a", label: "Feel empty or lost without knowing what to do next.", value: 2, description: "Goal hangover" },
      { id: "ga_16_b", label: "Immediately jump into another random project without pausing.", value: 3, description: "Frantic switching" },
      { id: "ga_16_c", label: "Celebrate briefly, evaluate what worked, and thoughtfully choose my next focal point.", value: 5, description: "Deliberate elevation" },
      { id: "ga_16_d", label: "Stop setting goals entirely.", value: 1, description: "Disengagement" },
    ],
  },
  {
    id: "ga_q17",
    title: "I actively eliminate or outsource low-leverage tasks to free up energy for my highest-impact objectives.",
    subtitle: "Strategic leverage and operational execution.",
    type: "likert-scale",
    dimension: "Execution",
    options: [
      { id: "ga_17_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_17_2", label: "Disagree", value: 2 },
      { id: "ga_17_3", label: "Neutral", value: 3 },
      { id: "ga_17_4", label: "Agree", value: 4 },
      { id: "ga_17_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q18",
    title: "How realistic and well-calibrated are your time estimates when planning project timelines?",
    subtitle: "Planning accuracy and planning fallacy resistance.",
    type: "single-choice",
    dimension: "Planning",
    options: [
      { id: "ga_18_1", label: "Highly unrealistic (everything takes 3x longer than planned).", value: 1 },
      { id: "ga_18_2", label: "Often overly optimistic, leading to rushed deadlines.", value: 2 },
      { id: "ga_18_3", label: "Fairly accurate with reasonable safety buffers.", value: 4 },
      { id: "ga_18_4", label: "Very well-calibrated; I factor in buffers and consistently hit targets.", value: 5 },
    ],
  },
  {
    id: "ga_q19",
    title: "I can sustain focused effort on a single long-term goal for months even during the 'boring middle' when novelty has faded.",
    subtitle: "Middle-phase grit and sustained consistency.",
    type: "likert-scale",
    dimension: "Consistency",
    options: [
      { id: "ga_19_1", label: "Strongly Disagree", value: 1 },
      { id: "ga_19_2", label: "Disagree", value: 2 },
      { id: "ga_19_3", label: "Neutral", value: 3 },
      { id: "ga_19_4", label: "Agree", value: 4 },
      { id: "ga_19_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "ga_q20",
    title: "Looking at the past year, how satisfied are you with the ratio of goals you finished versus goals you abandoned?",
    subtitle: "Overall completion ratio reflection.",
    type: "single-choice",
    dimension: "Follow-Through",
    options: [
      { id: "ga_20_1", label: "Dissatisfied — almost everything was abandoned halfway.", value: 1 },
      { id: "ga_20_2", label: "Mixed — finished a few minor items, but dropped key priorities.", value: 2 },
      { id: "ga_20_3", label: "Generally satisfied — accomplished the majority of primary goals.", value: 4 },
      { id: "ga_20_4", label: "Extremely satisfied — achieved and closed out my most important targets.", value: 5 },
    ],
  },
];
