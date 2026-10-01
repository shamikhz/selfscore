import React from "react";
import { AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Terms of Service",
  description:
    "SelfScore Terms of Service: Educational self-assessment terms, non-medical disclosure, and platform guidelines.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Please review the following terms and guidelines before using the SelfScore platform.
        </p>
      </div>

      {/* Prominent Educational Notice */}
      <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-sm leading-relaxed">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <span className="font-semibold block text-base">Important Non-Diagnostic Notice</span>
          <p>
            SelfScore assessments provide an informal indication based entirely on your self-reported answers.
            <strong>
              They are NOT clinical diagnoses, psychiatric evaluations, psychological certifications, or professional medical/financial advice.
            </strong>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Card variant="default" className="p-5 space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            1. Nature of Self-Assessments
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All quizzes, calculators, and assessments hosted on SelfScore are intended solely for personal reflection,
            informal self-discovery, and educational exploration. Scores represent self-perceived tendencies and should
            never be used as a substitute for professional clinical screening or licensed therapy.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            2. Medical & Emergency Limitations
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you are experiencing severe emotional distress, acute anxiety, depression, sleep disorders, or health emergencies,
            please immediately contact a local healthcare provider or emergency crisis hotline. SelfScore does not monitor or intervene in crises.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            3. Disclaimer of Warranties
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The platform and all scoring algorithms are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            We make no guarantees regarding scientific validity or infallible psychometric precision unless explicitly noted
            for standardized instruments.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            4. User Conduct
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You agree to use SelfScore in good faith for personal exploration and not attempt to reverse engineer, scrape,
            or exploit platform assets.
          </p>
        </Card>
      </div>

      <p className="text-xs text-muted">
        Last updated: October 2026. SelfScore Platform.
      </p>
    </div>
  );
}
