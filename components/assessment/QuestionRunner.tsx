"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, X, AlertCircle, AlertTriangle } from "lucide-react";
import { AssessmentMeta } from "@/types/assessment";
import { Question } from "@/types/question";
import { ScoreTier } from "@/types/result";
import { getAssessmentDefinition } from "@/assessments/registry";
import { QuestionCard } from "./QuestionCard";
import { QuestionProgress } from "./QuestionProgress";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";
import { saveProgress, getProgress, clearProgress } from "@/lib/storage/progressStorage";
import { generateAssessmentResult } from "@/lib/assessment-engine/resultGenerator";
import { saveResult } from "@/lib/storage/resultStorage";
import { AdSlot } from "@/components/ads/AdSlot";

export interface QuestionRunnerProps {
  slug: string;
  meta: AssessmentMeta;
  questions: Question[];
  tiers: ScoreTier[];
  onComplete?: (resultUrl: string) => void;
  onExit?: () => void;
}

export const QuestionRunner: React.FC<QuestionRunnerProps> = ({
  slug,
  meta,
  questions,
  tiers,
  onComplete,
  onExit,
}) => {
  const router = useRouter();

  // Active state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedOptionIds, setSelectedOptionIds] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<boolean>(false);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<{
    index: number;
    answers: Record<string, number>;
    selectedOptionIds?: Record<string, string>;
  } | null>(null);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const currentOptionId = currentQuestion ? selectedOptionIds[currentQuestion.id] : undefined;
  const isCurrentAnswered = typeof currentAnswer === "number";
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Check for saved progress on mount
  useEffect(() => {
    const saved = getProgress(meta.id);
    if (saved && Object.keys(saved.answers).length > 0) {
      const validIndex = Math.min(saved.currentQuestionIndex, totalQuestions - 1);
      setResumeData({
        index: validIndex,
        answers: saved.answers,
        selectedOptionIds: saved.selectedOptionIds,
      });
      setShowResumeModal(true);
    }
  }, [meta.id, totalQuestions]);

  // Auto-save answers whenever they change
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      saveProgress(meta.id, currentIndex, answers, selectedOptionIds);
    }
  }, [answers, selectedOptionIds, currentIndex, meta.id]);

  // Resume handlers
  const handleConfirmResume = () => {
    if (resumeData) {
      setAnswers(resumeData.answers);
      if (resumeData.selectedOptionIds) {
        setSelectedOptionIds(resumeData.selectedOptionIds);
      }
      setCurrentIndex(resumeData.index);
    }
    setShowResumeModal(false);
  };

  const handleStartFresh = () => {
    clearProgress(meta.id);
    setAnswers({});
    setSelectedOptionIds({});
    setCurrentIndex(0);
    setShowResumeModal(false);
  };

  // Answer selection handler
  const handleSelectAnswer = useCallback(
    (value: number, optionId: string) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: value,
      }));
      setSelectedOptionIds((prev) => ({
        ...prev,
        [currentQuestion.id]: optionId,
      }));
      setValidationError(false);
    },
    [currentQuestion]
  );

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setValidationError(false);
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleFinish = useCallback(async () => {
    if (isSubmitting) return;

    // Validate that all questions have answers
    const unansweredIndex = questions.findIndex(
      (q) => typeof answers[q.id] !== "number"
    );

    if (unansweredIndex !== -1) {
      // Direct user to the first missed question
      setCurrentIndex(unansweredIndex);
      setValidationError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const definition = getAssessmentDefinition(slug);

      // Generate standard scored result object
      const result = generateAssessmentResult({
        assessmentId: meta.id,
        questions,
        answers,
        tiers,
        resolveInsights: definition?.resolveInsights,
      });

      // Persist to localStorage
      saveResult(result);

      // Clear in-progress session
      clearProgress(meta.id);

      const resultUrl = `/assessment/${meta.slug}/result`;

      if (onComplete) {
        onComplete(resultUrl);
      } else {
        router.push(resultUrl);
      }
    } catch (err) {
      console.error("[QuestionRunner] Failed to calculate or save result:", err);
      setIsSubmitting(false);
    }
  }, [isSubmitting, questions, answers, meta.id, meta.slug, slug, tiers, onComplete, router]);

  const handleNext = useCallback(() => {
    if (!isCurrentAnswered) {
      setValidationError(true);
      try {
        if (typeof window !== "undefined" && "vibrate" in navigator) {
          navigator.vibrate(50);
        }
      } catch (_) {}
      return;
    }

    setValidationError(false);

    if (isLastQuestion) {
      handleFinish();
    } else {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isCurrentAnswered, isLastQuestion, handleFinish]);

  // Keyboard shortcut listener (Enter/Space to advance, Backspace/ArrowLeft to go back)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when modal is open or inside text inputs
      if (showExitModal || showResumeModal) return;
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handleNext, handlePrev, showExitModal, showResumeModal]);

  const handleExitClick = () => {
    setShowExitModal(true);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    if (onExit) {
      onExit();
    } else {
      router.push(`/assessment/${meta.slug}`);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center space-y-4">
        <AlertCircle className="w-10 h-10 text-danger mx-auto" />
        <h2 className="text-xl font-bold text-foreground">No questions found</h2>
        <p className="text-sm text-muted-foreground">
          This assessment does not have questions configured yet.
        </p>
        <Button variant="secondary" onClick={() => router.push(`/assessment/${meta.slug}`)}>
          Return to Overview
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex flex-col justify-between max-w-xl mx-auto px-2 sm:px-4 py-3 sm:py-6 pb-28 sm:pb-8">
      {/* Runner Top Bar */}
      <header className="space-y-3 sm:space-y-4 pb-2 sm:pb-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleExitClick}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors p-1.5 -ml-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Exit assessment"
          >
            <X className="w-4 h-4" />
            <span>Save & Exit</span>
          </button>

          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground truncate max-w-[200px]">
            {meta.title}
          </span>
        </div>

        {/* Progress bar & question counter */}
        <QuestionProgress
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          dimension={currentQuestion.dimension}
        />
      </header>

      {/* Sponsor Placement below header */}
      <AdSlot placement="questionScreen" className="my-2" />

      {/* Primary Question Presentation Card */}
      <main className="flex-1 py-2 sm:py-6 space-y-4">
        <Card
          variant="default"
          className={`p-4 sm:p-7 shadow-sm transition-all duration-200 ${
            validationError ? "ring-2 ring-accent ring-offset-2" : ""
          }`}
        >
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            selectedOptionId={currentOptionId}
            onSelectAnswer={handleSelectAnswer}
          />
        </Card>

        {/* Friendly Validation Banner if user clicks Next before choosing an option */}
        {validationError && (
          <div
            role="alert"
            className="animate-in fade-in slide-in-from-top-1 duration-200 flex items-center justify-center gap-2 p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent text-xs sm:text-sm font-semibold text-center"
          >
            <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Please select an option above to continue</span>
          </div>
        )}
      </main>

      {/* Thumb-Zone Fixed Bottom Navigation Controls */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-surface-border px-4 py-3 sm:py-4 pb-safe shadow-raised sm:relative sm:z-auto sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:shadow-none sm:px-0 sm:pb-0 sm:pt-4">
        <div className="flex items-center justify-between gap-3 max-w-xl mx-auto">
          {/* Back Button */}
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handlePrev}
            disabled={currentIndex === 0 || isSubmitting}
            className="flex-1 sm:flex-initial min-w-[90px] h-12 text-sm sm:text-base font-medium shadow-xs bg-surface"
            aria-label="Previous question"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back</span>
          </Button>

          {/* Next / Complete Button */}
          <Button
            type="button"
            variant={isCurrentAnswered ? "primary" : "secondary"}
            size="lg"
            onClick={handleNext}
            disabled={isSubmitting}
            className={`flex-1 min-w-[150px] h-12 text-sm sm:text-base font-semibold shadow-md transition-all ${
              isCurrentAnswered
                ? "bg-primary text-primary-foreground shadow-primary/20 scale-[1.01]"
                : "bg-surface-subtle text-foreground/80 border border-surface-border hover:bg-surface-subtle/80"
            }`}
            aria-label={isLastQuestion ? "Complete assessment" : "Next question"}
          >
            {isSubmitting ? (
              <span>Calculating...</span>
            ) : isLastQuestion ? (
              <>
                <span>Complete</span>
                <CheckCircle2 className="w-4 h-4 ml-2 stroke-[2.5]" />
              </>
            ) : (
              <>
                <span>Next</span>
                <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5]" />
              </>
            )}
          </Button>
        </div>
      </footer>

      {/* Resume In-Progress Modal */}
      <Modal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        title="Resume Assessment?"
      >
        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            We found an in-progress session for <strong>{meta.title}</strong> with{" "}
            {resumeData ? Object.keys(resumeData.answers).length : 0} of {totalQuestions} answered.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              variant="primary"
              size="md"
              className="flex-1"
              onClick={handleConfirmResume}
            >
              Resume at Question {(resumeData?.index ?? 0) + 1}
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="flex-1"
              onClick={handleStartFresh}
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Start Fresh
            </Button>
          </div>
        </div>
      </Modal>

      {/* Exit Confirmation Modal */}
      <Modal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Leave Assessment?"
      >
        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your answers are saved automatically on this device. You can return whenever you wish to finish your assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={() => setShowExitModal(false)}
            >
              Continue Assessment
            </Button>
            <Button
              variant="ghost"
              size="md"
              className="flex-1 text-danger hover:text-danger hover:bg-danger/10"
              onClick={handleConfirmExit}
            >
              Exit to Overview
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
