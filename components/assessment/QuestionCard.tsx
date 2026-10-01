import React from "react";
import { Question } from "@/types/question";
import { AnswerOption } from "./AnswerOption";
import { LikertScale } from "./LikertScale";
import { ScenarioQuestion } from "./ScenarioQuestion";

export interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  selectedOptionId?: string;
  onSelectAnswer: (value: number, optionId: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  selectedOptionId,
  onSelectAnswer,
}) => {
  return (
    <fieldset className="border-0 p-0 m-0 space-y-5">
      {/* Accessible Question Title / Legend */}
      <legend className="w-full text-left space-y-1.5 pb-1">
        <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
          {question.title}
        </h2>
        {question.subtitle && question.type !== "scenario" && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {question.subtitle}
          </p>
        )}
      </legend>

      {/* Polymorphic Question Formats */}
      {question.type === "likert-scale" ? (
        <LikertScale
          options={question.options}
          selectedValue={selectedAnswer}
          selectedOptionId={selectedOptionId}
          onSelect={onSelectAnswer}
        />
      ) : question.type === "scenario" ? (
        <ScenarioQuestion
          question={question}
          selectedValue={selectedAnswer}
          selectedOptionId={selectedOptionId}
          onSelect={onSelectAnswer}
        />
      ) : question.type === "slider" ? (
        <div className="space-y-6 p-4 rounded-xl bg-surface border border-surface-border">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">
              {typeof selectedAnswer === "number"
                ? selectedAnswer
                : question.options[0]?.value || 0}
            </span>
          </div>

          <input
            type="range"
            min={Math.min(...question.options.map((o) => o.value))}
            max={Math.max(...question.options.map((o) => o.value))}
            value={
              typeof selectedAnswer === "number"
                ? selectedAnswer
                : question.options[0]?.value || 0
            }
            onChange={(e) => {
              const val = Number(e.target.value);
              const matchedOption = question.options.find((o) => o.value === val);
              onSelectAnswer(val, matchedOption?.id || `slider_${val}`);
            }}
            className="w-full h-3 bg-surface-subtle rounded-lg appearance-none cursor-pointer accent-primary"
            aria-label={question.title}
          />

          <div className="flex justify-between text-xs text-muted-foreground font-medium">
            <span>{question.options[0]?.label}</span>
            <span>{question.options[question.options.length - 1]?.label}</span>
          </div>
        </div>
      ) : (
        /* single-choice or frequency */
        <div
          role="radiogroup"
          aria-label={question.title}
          className="space-y-2.5 sm:space-y-3"
        >
          {question.options.map((option, idx) => (
            <AnswerOption
              key={option.id || option.value}
              option={option}
              index={idx}
              isSelected={
                selectedOptionId
                  ? selectedOptionId === option.id
                  : typeof selectedAnswer === "number" && selectedAnswer === option.value
              }
              onSelect={onSelectAnswer}
            />
          ))}
        </div>
      )}
    </fieldset>
  );
};
