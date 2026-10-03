"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { History, ArrowRight, RotateCcw } from "lucide-react";
import { getCompletedAssessmentSlugs, getSavedResult } from "@/lib/storage/resultStorage";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { AssessmentResult } from "@/types/result";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AdSlot } from "@/components/ads/AdSlot";

export const ResultsHistoryClient: React.FC = () => {
  const [resultsList, setResultsList] = useState<
    Array<{ result: AssessmentResult; title: string; slug: string; duration: string }>
  >([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const slugs = getCompletedAssessmentSlugs();
    const items = slugs
      .map((slug) => {
        const result = getSavedResult(slug);
        const meta = getAssessmentBySlug(slug);
        if (result && meta) {
          return {
            result,
            title: meta.title,
            slug: meta.slug,
            duration: meta.estimatedDuration,
          };
        }
        return null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    setResultsList(items);
    setIsLoaded(true);
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          My Saved Results
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Your completed assessment history is stored safely and privately on this device.
        </p>
      </div>

      {/* 1. TOP RESPONSIVE LEADERBOARD */}
      <AdSlot placement="resultsListTop" className="my-3" />

      {!isLoaded ? (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-28 rounded-xl bg-surface-subtle animate-pulse border border-surface-border/50"
            />
          ))}
        </div>
      ) : resultsList.length === 0 ? (
        <Card variant="subtle" className="p-8 sm:p-12 text-center space-y-4 my-8">
          <div className="w-12 h-12 rounded-full bg-primary-subtle text-primary flex items-center justify-center mx-auto">
            <History className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-foreground">
              No saved results yet
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
              Once you complete an assessment, your scores, breakdowns, and personal insights
              will automatically appear here.
            </p>
          </div>
          <Link href="/explore">
            <Button size="md" className="mt-2">
              <span>Explore Assessments</span>
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {resultsList.map(({ result, title, slug }) => (
              <Card
                key={slug}
                variant="default"
                className="p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" size="sm">
                      Score: {result.score} / 100
                    </Badge>
                    <span className="text-xs font-semibold text-foreground">
                      {result.tier.label}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="text-xs text-muted" suppressHydrationWarning>
                    Completed on {new Date(result.completedAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                  <Link href={`/assessment/${slug}/result`} className="flex-1 sm:flex-initial">
                    <Button variant="outline" size="sm" fullWidth>
                      <span>View Insights</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href={`/assessment/${slug}/questions`} className="flex-1 sm:flex-initial">
                    <Button variant="ghost" size="sm" fullWidth>
                      <RotateCcw className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                      <span>Retake</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* 2. MID-LIST RECTANGLE AD */}
          <AdSlot placement="resultsListMid" className="my-4" />
        </div>
      )}

      {/* 3. BOTTOM NATIVE AD */}
      <AdSlot placement="resultsListBottom" className="mt-8" />
    </div>
  );
};
