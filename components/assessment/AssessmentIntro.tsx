import React from "react";
import Link from "next/link";
import { Clock, HelpCircle, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { AssessmentMeta } from "@/types/assessment";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AdSlot } from "@/components/ads/AdSlot";

export interface AssessmentIntroProps {
  assessment: AssessmentMeta;
}

export const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ assessment }) => {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[260px_1fr_260px] gap-6 xl:gap-8 items-start animate-in fade-in duration-200">
      {/* Left Sidebar Ad Placement (Desktop XL) */}
      <aside aria-label="Left Sidebar Sponsor" className="hidden xl:block sticky top-20">
        <AdSlot placement="assessmentIntroLeft" className="my-0" />
      </aside>

      {/* Main Assessment Intro Content */}
      <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8">
        {/* Category & Status */}
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="sm" className="capitalize">
            {assessment.category}
          </Badge>
          <span className="text-xs text-muted">•</span>
          <span className="text-xs text-muted font-medium">Self-Assessment</span>
        </div>

        {/* Main Heading & Editorial Summary */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            {assessment.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {assessment.description}
          </p>
        </div>

        {/* Overview Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-surface-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-primary">
              <Clock className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs text-muted">Estimated time</div>
              <div className="text-sm font-semibold text-foreground">
                {assessment.estimatedDuration}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-primary">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs text-muted">Total Questions</div>
              <div className="text-sm font-semibold text-foreground">
                {assessment.questionCount} Questions
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-lg bg-surface-subtle flex items-center justify-center text-success">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs text-muted">Privacy</div>
              <div className="text-sm font-semibold text-foreground">
                100% Local / No Login
              </div>
            </div>
          </div>
        </div>

        {/* What you will learn / Dimensions */}
        <Card variant="default" className="p-5 sm:p-6 space-y-3">
          <h2 className="text-sm uppercase tracking-wider font-bold text-foreground">
            What you will explore:
          </h2>
          <ul className="space-y-2">
            {assessment.dimensions.map((dimension) => (
              <li key={dimension} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>{dimension}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* In-Between Mid Content Ad */}
        <AdSlot placement="assessmentIntroMid" className="my-4" />

        {/* Mandatory Scientific Validity & Disclaimer Notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <span className="font-semibold block mb-0.5">Educational Notice</span>
            {assessment.disclaimer ||
              "This assessment provides an informal indication based on your answers. It is not a clinical diagnosis or professional evaluation."}
          </div>
        </div>

        {/* Start Button & Thumb Zone Primary Action */}
        <div className="pt-2">
          <Link href={`/assessment/${assessment.slug}/questions`}>
            <Button size="lg" fullWidth className="shadow-raised">
              <span>Begin Assessment</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </Link>
          <p className="text-center text-xs text-muted mt-3">
            Your responses remain strictly on this device. You can pause or retake at any time.
          </p>
        </div>

        {/* Bottom Recommendation Ad */}
        <AdSlot placement="assessmentIntroBottom" className="my-6" />
      </div>

      {/* Right Sidebar Ad Placement (Desktop LG & XL) */}
      <aside aria-label="Right Sidebar Sponsor" className="hidden lg:block sticky top-20">
        <AdSlot placement="assessmentIntroRight" className="my-0" />
      </aside>
    </div>
  );
};
