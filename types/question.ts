export type QuestionType =
  | "single-choice"
  | "likert-scale"
  | "frequency"
  | "scenario"
  | "slider";

export interface AnswerOption {
  id: string;
  label: string;
  value: number;
  description?: string;
}

export interface Question {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  dimension: string;
  options: AnswerOption[];
  reversed?: boolean;
  weight?: number;
}
