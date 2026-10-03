"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Props {
  children: ReactNode;
  assessmentSlug?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class AssessmentErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[AssessmentErrorBoundary caught error]:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center py-8 px-4">
          <Card variant="default" className="max-w-md w-full p-6 sm:p-8 text-center space-y-5 shadow-raised">
            <div className="w-12 h-12 rounded-2xl bg-danger/10 text-danger flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Assessment Session Interrupted
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                An unexpected issue occurred during this question session. Your previous completed tests and general data are safe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {this.props.assessmentSlug && (
                <Link href={`/assessment/${this.props.assessmentSlug}`} className="w-full">
                  <Button variant="primary" size="md" fullWidth>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    <span>Restart Test</span>
                  </Button>
                </Link>
              )}

              <Link href="/explore" className="w-full">
                <Button variant="outline" size="md" fullWidth>
                  <Home className="w-4 h-4 mr-2" />
                  <span>Explore Tests</span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
