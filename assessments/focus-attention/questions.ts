import { Question } from "@/types/question";

export const focusAttentionQuestions: Question[] = [
  // =========================================================================
  // STAGE 1: GENERAL / SELF-AWARENESS (Questions 1–5)
  // =========================================================================
  {
    id: "fa_q1",
    title: "When you sit down to begin a complex, high-focus task, how easily do you enter a state of concentration?",
    subtitle: "Focus friction and initial cognitive transition.",
    type: "single-choice",
    dimension: "Deep Work",
    options: [
      { id: "fa_1_1", label: "Very difficult — I procrastinate and wander for a long time.", value: 1 },
      { id: "fa_1_2", label: "It takes 20–30 minutes of fidgeting before I settle down.", value: 2 },
      { id: "fa_1_3", label: "I usually get focused within 5–10 minutes of starting.", value: 4 },
      { id: "fa_1_4", label: "I drop smoothly into deep immersion almost immediately.", value: 5 },
    ],
  },
  {
    id: "fa_q2",
    title: "I can work continuously on a challenging single objective for 45–60 minutes without feeling the urge to check my phone or browser.",
    subtitle: "Sustained attention stamina.",
    type: "likert-scale",
    dimension: "Sustained Attention",
    options: [
      { id: "fa_2_1", label: "Strongly Disagree", value: 1 },
      { id: "fa_2_2", label: "Disagree", value: 2 },
      { id: "fa_2_3", label: "Neutral", value: 3 },
      { id: "fa_2_4", label: "Agree", value: 4 },
      { id: "fa_2_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "fa_q3",
    title: "How often do you find your mind wandering completely off-topic during conversations, lectures, or reading?",
    subtitle: "Mind-wandering frequency (reversed).",
    type: "frequency",
    dimension: "Sustained Attention",
    reversed: true,
    options: [
      { id: "fa_3_1", label: "Almost Constantly", value: 1 },
      { id: "fa_3_2", label: "Frequently", value: 2 },
      { id: "fa_3_3", label: "Occasionally", value: 3 },
      { id: "fa_3_4", label: "Rarely", value: 4 },
      { id: "fa_3_5", label: "Almost Never (fully locked in)", value: 5 },
    ],
  },
  {
    id: "fa_q4",
    title: "When you hear a notification chime while engaged in important work, what happens?",
    subtitle: "Auditory distraction reactivity and impulse control (reversed).",
    type: "scenario",
    dimension: "Distraction Control",
    reversed: true,
    options: [
      { id: "fa_4_a", label: "I immediately stop my work and check the phone right away.", value: 1, description: "Instant interruption" },
      { id: "fa_4_b", label: "I try to ignore it, but my mind is distracted wondering what it is.", value: 2, description: "Cognitive pull" },
      { id: "fa_4_c", label: "I glance briefly, then return to my task.", value: 3, description: "Brief check" },
      { id: "fa_4_d", label: "I have notifications silenced or ignore it completely until my focus block ends.", value: 5, description: "Protected attention" },
    ],
  },
  {
    id: "fa_q5",
    title: "I tend to open dozens of browser tabs simultaneously and jump erratically between them.",
    subtitle: "Digital fragmentation and focus splintering (reversed).",
    type: "likert-scale",
    dimension: "Task Switching",
    reversed: true,
    options: [
      { id: "fa_5_1", label: "Strongly Agree", value: 1 },
      { id: "fa_5_2", label: "Agree", value: 2 },
      { id: "fa_5_3", label: "Neutral", value: 3 },
      { id: "fa_5_4", label: "Disagree", value: 4 },
      { id: "fa_5_5", label: "Strongly Disagree", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 2: BEHAVIORAL (Questions 6–10)
  // =========================================================================
  {
    id: "fa_q6",
    title: "How do you typically structure your workday or study schedule?",
    subtitle: "Intentionality in deep work architecture.",
    type: "scenario",
    dimension: "Deep Work",
    options: [
      { id: "fa_6_a", label: "Completely reactive — I work on whatever arrives in my inbox or chat.", value: 1, description: "Reactive mode" },
      { id: "fa_6_b", label: "I have a loose to-do list, but switch tasks whenever I get bored.", value: 2, description: "Unstructured list" },
      { id: "fa_6_c", label: "I pick 2–3 priorities and chip away at them through the day.", value: 4, description: "Priority focused" },
      { id: "fa_6_d", label: "I block dedicated time slots for deep work and isolate myself from interruptions.", value: 5, description: "Time-blocked mastery" },
    ],
  },
  {
    id: "fa_q7",
    title: "I actively shape my physical and digital workspace to remove visual clutter and temptations.",
    subtitle: "Environment optimization and friction engineering.",
    type: "likert-scale",
    dimension: "Environment Management",
    options: [
      { id: "fa_7_1", label: "Strongly Disagree", value: 1 },
      { id: "fa_7_2", label: "Disagree", value: 2 },
      { id: "fa_7_3", label: "Neutral", value: 3 },
      { id: "fa_7_4", label: "Agree", value: 4 },
      { id: "fa_7_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "fa_q8",
    title: "When working on a core task and a random thought or errand pops into your head, what do you do?",
    subtitle: "Handling internal cognitive interruptions.",
    type: "single-choice",
    dimension: "Distraction Control",
    options: [
      { id: "fa_8_1", label: "Immediately switch to researching or doing that errand.", value: 1 },
      { id: "fa_8_2", label: "Get distracted thinking about it for 10 minutes.", value: 2 },
      { id: "fa_8_3", label: "Jot it down on a quick notepad to handle later, and stay on my task.", value: 5 },
      { id: "fa_8_4", label: "Forget it and let it create mental tension.", value: 3 },
    ],
  },
  {
    id: "fa_q9",
    title: "I pride myself on multitasking and trying to do two or three cognitive activities at once.",
    subtitle: "Multitasking myth belief vs single-tasking (reversed).",
    type: "likert-scale",
    dimension: "Task Switching",
    reversed: true,
    options: [
      { id: "fa_9_1", label: "Strongly Agree", value: 1 },
      { id: "fa_9_2", label: "Agree", value: 2 },
      { id: "fa_9_3", label: "Neutral", value: 3 },
      { id: "fa_9_4", label: "Disagree", value: 4 },
      { id: "fa_9_5", label: "Strongly Disagree (committed to single-tasking)", value: 5 },
    ],
  },
  {
    id: "fa_q10",
    title: "How often do you reach for your phone unconsciously without having any specific purpose in mind?",
    subtitle: "Automatic dopamine-seeking reflexes (reversed).",
    type: "frequency",
    dimension: "Distraction Control",
    reversed: true,
    options: [
      { id: "fa_10_1", label: "Multiple times per hour", value: 1 },
      { id: "fa_10_2", label: "Several times a day", value: 2 },
      { id: "fa_10_3", label: "Occasionally", value: 3 },
      { id: "fa_10_4", label: "Rarely", value: 4 },
      { id: "fa_10_5", label: "Almost Never (very intentional usage)", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 3: SITUATIONAL (Questions 11–15)
  // =========================================================================
  {
    id: "fa_q11",
    title: "You are working in a moderately noisy environment (like a coffee shop or busy office). How effectively can you maintain focus?",
    subtitle: "Sensory filter and environmental resilience.",
    type: "single-choice",
    dimension: "Environment Management",
    options: [
      { id: "fa_11_1", label: "I cannot work at all; every sound pulls my attention away.", value: 1 },
      { id: "fa_11_2", label: "I struggle constantly and make very slow progress.", value: 2 },
      { id: "fa_11_3", label: "I can focus reasonably well using headphones or background music.", value: 4 },
      { id: "fa_11_4", label: "I can tune out ambient noise effortlessly and stay immersed.", value: 5 },
    ],
  },
  {
    id: "fa_q12",
    title: "When an urgent interruption forces you to step away from deep work for 15 minutes, how easily do you resume where you left off?",
    subtitle: "Attention residue recovery and context reloading.",
    type: "scenario",
    dimension: "Task Switching",
    options: [
      { id: "fa_12_a", label: "My focus is completely shattered; I abandon the task for the day.", value: 1, description: "Total derailment" },
      { id: "fa_12_b", label: "I waste 20 minutes trying to remember what I was doing.", value: 2, description: "High residue drag" },
      { id: "fa_12_c", label: "I re-read my notes for a couple of minutes and gradually get back into rhythm.", value: 4, description: "Measured re-entry" },
      { id: "fa_12_d", label: "Because I leave clear checkpoints, I dive right back into flow smoothly.", value: 5, description: "Seamless re-entry" },
    ],
  },
  {
    id: "fa_q13",
    title: "I can read long-form articles, books, or technical reports without feeling restless or skimming ahead prematurely.",
    subtitle: "Sustained reading comprehension and linear depth.",
    type: "likert-scale",
    dimension: "Sustained Attention",
    options: [
      { id: "fa_13_1", label: "Strongly Disagree", value: 1 },
      { id: "fa_13_2", label: "Disagree", value: 2 },
      { id: "fa_13_3", label: "Neutral", value: 3 },
      { id: "fa_13_4", label: "Agree", value: 4 },
      { id: "fa_13_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "fa_q14",
    title: "When a project hits a tedious, boring, or difficult roadblock, what is your standard behavior?",
    subtitle: "Cognitive endurance through friction points.",
    type: "scenario",
    dimension: "Deep Work",
    options: [
      { id: "fa_14_a", label: "Immediately escape to social media or easier low-value tasks.", value: 1, description: "Friction escape" },
      { id: "fa_14_b", label: "Procrastinate by reorganizing files or cleaning my desk.", value: 2, description: "Productive procrastination" },
      { id: "fa_14_c", label: "Take a planned short break, then break the roadblock into smaller micro-steps.", value: 4, description: "Constructive breakdown" },
      { id: "fa_14_d", label: "Lean in, apply structured problem-solving, and push through the barrier.", value: 5, description: "Friction mastery" },
    ],
  },
  {
    id: "fa_q15",
    title: "I use website blockers, 'Do Not Disturb' modes, or physical separation to protect my focus periods.",
    subtitle: "Proactive environmental barrier implementation.",
    type: "frequency",
    dimension: "Environment Management",
    options: [
      { id: "fa_15_1", label: "Never", value: 1 },
      { id: "fa_15_2", label: "Rarely", value: 2 },
      { id: "fa_15_3", label: "Occasionally", value: 3 },
      { id: "fa_15_4", label: "Frequently", value: 4 },
      { id: "fa_15_5", label: "Consistently on all focus sessions", value: 5 },
    ],
  },

  // =========================================================================
  // STAGE 4: SPECIFIC / DEEPER (Questions 16–20)
  // =========================================================================
  {
    id: "fa_q16",
    title: "How consistently do you experience 'flow state' (where you lose track of time while performing high-value work)?",
    subtitle: "Flow frequency and optimal engagement.",
    type: "frequency",
    dimension: "Deep Work",
    options: [
      { id: "fa_16_1", label: "Almost Never", value: 1 },
      { id: "fa_16_2", label: "Once a month or less", value: 2 },
      { id: "fa_16_3", label: "1–2 times per week", value: 4 },
      { id: "fa_16_4", label: "Almost every workday", value: 5 },
    ],
  },
  {
    id: "fa_q17",
    title: "I can finish a multi-hour project without stopping halfway to start an unrelated new idea.",
    subtitle: "Project completion discipline and follow-through focus.",
    type: "likert-scale",
    dimension: "Sustained Attention",
    options: [
      { id: "fa_17_1", label: "Strongly Disagree", value: 1 },
      { id: "fa_17_2", label: "Disagree", value: 2 },
      { id: "fa_17_3", label: "Neutral", value: 3 },
      { id: "fa_17_4", label: "Agree", value: 4 },
      { id: "fa_17_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "fa_q18",
    title: "When you notice your focus waning in the middle of the afternoon, how do you handle it?",
    subtitle: "Circadian attention regulation and energy management.",
    type: "single-choice",
    dimension: "Environment Management",
    options: [
      { id: "fa_18_1", label: "Endlessly scroll feeds in a state of sluggish fatigue.", value: 1 },
      { id: "fa_18_2", label: "Force myself to stare at the screen without making real progress.", value: 2 },
      { id: "fa_18_3", label: "Switch to low-cognitive administrative tasks or take a short walk.", value: 4 },
      { id: "fa_18_4", label: "Take a strategic 15-minute rest/hydration break and align tasks with energy.", value: 5 },
    ],
  },
  {
    id: "fa_q19",
    title: "I am able to say 'I'm focusing right now, can we connect in an hour?' to colleagues or friends when immersed in deep work.",
    subtitle: "Interpersonal focus boundary defense.",
    type: "likert-scale",
    dimension: "Distraction Control",
    options: [
      { id: "fa_19_1", label: "Strongly Disagree", value: 1 },
      { id: "fa_19_2", label: "Disagree", value: 2 },
      { id: "fa_19_3", label: "Neutral", value: 3 },
      { id: "fa_19_4", label: "Agree", value: 4 },
      { id: "fa_19_5", label: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: "fa_q20",
    title: "How deliberate are you in completing one task entirely before deciding what to work on next?",
    subtitle: "Sequential execution and task-switching minimization.",
    type: "single-choice",
    dimension: "Task Switching",
    options: [
      { id: "fa_20_1", label: "I almost never finish tasks sequentially; everything remains half-done.", value: 1 },
      { id: "fa_20_2", label: "I frequently abandon tasks when something shiny appears.", value: 2 },
      { id: "fa_20_3", label: "I mostly finish primary tasks before pivoting.", value: 4 },
      { id: "fa_20_4", label: "I rigorously practice single-task completion before moving to new items.", value: 5 },
    ],
  },
];
