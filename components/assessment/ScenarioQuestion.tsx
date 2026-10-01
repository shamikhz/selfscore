import React from "react";
import { Question } from "@/types/question";
import { AnswerOption } from "./AnswerOption";

export interface ScenarioQuestionProps {
  question: Question;
  selectedValue?: number;
  selectedOptionId?: string;
  onSelect: (value: number, optionId: string) => void;
}

export const ScenarioQuestion: React.FC<ScenarioQuestionProps> = ({
  question,
  selectedValue,
  selectedOptionId,
  onSelect,
}) => {
  return (
    <div className="space-y-4">
      {/* Scenario Context Card */}
      {question.subtitle && (
        <div className="p-4 rounded-xl bg-surface-subtle/80 border border-surface-border text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{question.subtitle}&rdquo;
        </div>
      )}

      {/* Answer Options */}
      <div role="radiogroup" aria-label={question.title} className="space-y-2.5">
        {question.options.map((option, idx) => (
          <AnswerOption
            key={option.id || option.value}
            option={option}
            index={idx}
            isSelected={
              selectedOptionId
                ? selectedOptionId === option.id
                : typeof selectedValue === "number" && selectedValue === option.value
            }
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};
