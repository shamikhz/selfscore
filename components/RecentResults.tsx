"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { History, ArrowRight } from "lucide-react";
import { getCompletedAssessmentSlugs, getSavedResult } from "@/lib/storage/resultStorage";
import { getAssessmentBySlug } from "@/lib/assessments-catalog";
import { AssessmentResult } from "@/types/result";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const RecentResults: React.FC = () => {
  const [recentList, setRecentList] = useState<
    Array<{ result: AssessmentResult; title: string; slug: string }>
  >([]);

  useEffect(() => {
    const slugs = getCompletedAssessmentSlugs();
    if (!slugs.length) return;

    const loaded = slugs
      .map((slug) => {
        const res = getSavedResult(slug);
        const meta = getAssessmentBySlug(slug);
        if (res && meta) {
          return { result: res, title: meta.title, slug: meta.slug };
        }
        return null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .slice(0, 3); // show at most 3 recent results

    setRecentList(loaded);
  }, []);

  if (!recentList.length) return null;

  return (
    <section className="mb-10 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-primary" aria-hidden="true" />
          <h2 className="text-lg font-semibold text-foreground tracking-tight">
            Your Recent Results
          </h2>
        </div>
        <Link
          href="/results"
          className="text-xs font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {recentList.map(({ result, title, slug }) => (
          <Link
            key={slug}
            href={`/assessment/${slug}/result`}
            className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
          >
            <Card variant="interactive" className="p-4 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <Badge variant="primary" size="sm">
                    Score: {result.score}
                  </Badge>
                  <span className="text-[11px] text-muted truncate">
                    {result.tier.label}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {title}
                </h3>
              </div>

              <div className="flex items-center justify-end text-xs text-primary font-medium mt-3 pt-2 border-t border-surface-border/50">
                <span className="inline-flex items-center gap-1">
                  Review <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
