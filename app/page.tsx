import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Clock, Brain, Compass, CheckCircle2 } from "lucide-react";
import {
  CATEGORIES,
  getFeaturedAssessments,
  getPopularAssessments,
  ASSESSMENTS_CATALOG,
} from "@/lib/assessments-catalog";
import { AssessmentCard } from "@/components/assessment/AssessmentCard";
import { RecentResults } from "@/components/RecentResults";
import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const featuredList = getFeaturedAssessments();
  const heroAssessment = featuredList[0] || ASSESSMENTS_CATALOG[0];
  const popularList = getPopularAssessments().slice(0, 6); // 6 items perfectly fills 2-col and 3-col grids

  return (
    <div className="space-y-10 sm:space-y-14 animate-in fade-in duration-300">
      {/* 2-Column Responsive Hero Section */}
      <section className="pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Vision & Copy */}
          <div className="lg:col-span-7 text-center sm:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{ASSESSMENTS_CATALOG.length} Evidence-Inspired Self-Assessments</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Understand your mind, habits, and momentum.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Thoughtful, mobile-first assessments to help you reflect on focus, personality,
              stress, and personal growth. Free, private, and zero signup required.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <Link href="/explore">
                <Button size="lg" variant="primary" className="font-semibold shadow-sm">
                  <Compass className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>Browse All {ASSESSMENTS_CATALOG.length} Tests</span>
                </Button>
              </Link>
              {heroAssessment && (
                <Link href={`/assessment/${heroAssessment.slug}`}>
                  <Button size="lg" variant="outline" className="font-semibold">
                    <span>Try {heroAssessment.title.split("&")[0]}</span>
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Value Prop Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 pt-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-success" aria-hidden="true" />
                100% Private (Local Storage)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                5–7 Minutes Each
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
                Instant Actionable Insights
              </span>
            </div>
          </div>

          {/* Right Column: Featured Spotlight Card on Desktop */}
          {heroAssessment && (
            <div className="lg:col-span-5">
              <Card
                variant="highlight"
                className="p-6 sm:p-7 space-y-4 relative overflow-hidden border-primary/20 shadow-raised"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-primary flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Featured Spotlight</span>
                  </span>
                  <Badge variant="accent" size="sm">
                    Editor’s Pick
                  </Badge>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                    {heroAssessment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {heroAssessment.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-surface/80 border border-surface-border text-xs text-muted-foreground space-y-1.5">
                  <div className="flex justify-between font-medium">
                    <span>Estimated time:</span>
                    <strong className="text-foreground">{heroAssessment.estimatedDuration}</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Questions:</span>
                    <strong className="text-foreground">{heroAssessment.questionCount} questions</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Key domains:</span>
                    <span className="text-primary font-semibold">{heroAssessment.dimensions.slice(0, 2).join(", ")}</span>
                  </div>
                </div>

                <Link href={`/assessment/${heroAssessment.slug}`} className="block">
                  <Button size="lg" variant="primary" fullWidth className="font-semibold shadow-subtle">
                    <span>Start Assessment</span>
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Local Storage Saved Results (if any exist) */}
      <RecentResults />

      {/* Categories Grid (Spans cleanly across desktop) */}
      <section aria-labelledby="categories-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2
            id="categories-heading"
            className="text-lg sm:text-xl font-bold text-foreground tracking-tight"
          >
            Explore by Life Domain
          </h2>
          <Link
            href="/explore"
            className="text-xs font-semibold text-primary hover:underline"
          >
            View all categories
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/explore?category=${cat.id}`}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Card
                variant="subtle"
                className="p-4 sm:p-5 hover:bg-surface hover:border-primary/40 hover:shadow-subtle transition-all h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore →</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Zero-CLS Pre-Allocated Ad Placement above Popular Assessments */}
      <AdSlot placement="home" className="my-6" />

      {/* Popular Assessments Grid (3-column layout on desktop) */}
      <section aria-labelledby="popular-heading" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2
              id="popular-heading"
              className="text-lg sm:text-xl font-bold text-foreground tracking-tight"
            >
              Popular Assessments
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              Most frequently taken self-evaluations this month.
            </p>
          </div>
          <Link
            href="/explore"
            className="text-xs sm:text-sm font-semibold text-primary hover:underline shrink-0"
          >
            View all {ASSESSMENTS_CATALOG.length} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {popularList.map((assessment) => (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          ))}
        </div>
      </section>

      {/* Explore All CTA Banner */}
      <section className="p-8 sm:p-12 rounded-2xl bg-surface border border-surface-border text-center space-y-4 shadow-subtle">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Ready to discover your profile?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Access all {ASSESSMENTS_CATALOG.length} assessments covering cognitive agility, deep focus, stress resilience,
          and relational communication.
        </p>
        <div className="pt-2">
          <Link href="/explore">
            <Button size="lg" variant="primary" className="font-semibold shadow-sm">
              Explore All {ASSESSMENTS_CATALOG.length} Assessments
            </Button>
          </Link>
        </div>
      </section>

      {/* Ad Placement Above Homepage Footer */}
      <AdSlot placement="home" className="my-6" />
    </div>
  );
}
