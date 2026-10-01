"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, X, AlertCircle } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<{ index: number; answers: Record<string, number> } | null>(null);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
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
      });
      setShowResumeModal(true);
    }
  }, [meta.id, totalQuestions]);

  // Auto-save answers whenever they change
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      saveProgress(meta.id, currentIndex, answers);
    }
  }, [answers, currentIndex, meta.id]);

  // Resume handlers
  const handleConfirmResume = () => {
    if (resumeData) {
      setAnswers(resumeData.answers);
      setCurrentIndex(resumeData.index);
    }
    setShowResumeModal(false);
  };

  const handleStartFresh = () => {
    clearProgress(meta.id);
    setAnswers({});
    setCurrentIndex(0);
    setShowResumeModal(false);
  };

  // Answer selection handler
  const handleSelectAnswer = useCallback(
    (value: number) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: value,
      }));
    },
    [currentQuestion]
  );

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
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
    if (!isCurrentAnswered) return;

    if (isLastQuestion) {
      handleFinish();
    } else {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isCurrentAnswered, isLastQuestion, handleFinish]);

  // Keyboard shortcut listener (Enter/Space to advance, Backspace to go back)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when modal is open or inside text inputs
      if (showExitModal || showResumeModal) return;
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (isCurrentAnswered) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCurrentAnswered, currentIndex, handleNext, handlePrev, showExitModal, showResumeModal]);

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
    <div className="min-h-[85vh] flex flex-col justify-between max-w-xl mx-auto px-4 py-4 sm:py-6">
      {/* Runner Top Bar */}
      <header className="space-y-4 pb-4">
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

      {/* Primary Question Presentation Card */}
      <main className="flex-1 py-4 sm:py-6">
        <Card variant="default" className="p-5 sm:p-7 shadow-sm">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            onSelectAnswer={handleSelectAnswer}
          />
        </Card>
      </main>

      {/* Thumb-Zone Fixed/Docked Navigation Controls */}
      <footer className="pt-4 pb-2 border-t border-surface-border mt-auto">
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={handlePrev}
            disabled={currentIndex === 0 || isSubmitting}
            className="flex-1 sm:flex-initial min-w-[100px]"
            aria-label="Previous question"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back</span>
          </Button>

          <Button
            type="button"
            variant={isLastQuestion ? "primary" : "secondary"}
            size="lg"
            onClick={handleNext}
            disabled={!isCurrentAnswered || isSubmitting}
            className="flex-1 min-w-[140px] font-semibold"
            aria-label={isLastQuestion ? "Complete assessment" : "Next question"}
          >
            {isSubmitting ? (
              <span>Calculating...</span>
            ) : isLastQuestion ? (
              <>
                <span>Complete</span>
                <CheckCircle2 className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                <span>Next</span>
                <ArrowRight className="w-4 h-4 ml-2" />
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
