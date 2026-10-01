import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Clock, Brain } from "lucide-react";
import {
  CATEGORIES,
  getFeaturedAssessments,
  getPopularAssessments,
} from "@/lib/assessments-catalog";
import { AssessmentCard } from "@/components/assessment/AssessmentCard";
import { RecentResults } from "@/components/RecentResults";
import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const featuredList = getFeaturedAssessments();
  const heroAssessment = featuredList[0];
  const popularList = getPopularAssessments().slice(0, 4);

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero Section */}
      <section className="text-center sm:text-left pt-2 sm:pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary/20 text-primary text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>14 Evidence-Inspired Self-Assessments</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
          Understand your mind, habits, and momentum.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Thoughtful, mobile-first assessments to help you reflect on focus, personality,
          stress, and personal growth. Free, private, and zero signup required.
        </p>

        {/* Value Prop Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-6 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-success" aria-hidden="true" />
            100% Private (Stored Locally)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
            5–7 Minutes per Assessment
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
            Instant Human-Readable Insights
          </span>
        </div>
      </section>

      {/* Local Storage Saved Results (if any exist) */}
      <RecentResults />

      {/* Featured Assessment Spotlight Card */}
      {heroAssessment && (
        <section aria-labelledby="featured-heading">
          <div className="flex items-center justify-between mb-3">
            <h2
              id="featured-heading"
              className="text-xs uppercase font-bold tracking-wider text-muted"
            >
              Featured Assessment
            </h2>
            <Badge variant="accent" size="sm">
              Editor’s Pick
            </Badge>
          </div>

          <Card
            variant="highlight"
            className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <Brain className="w-4 h-4" aria-hidden="true" />
                <span className="capitalize">{heroAssessment.category}</span>
                <span>•</span>
                <span>{heroAssessment.estimatedDuration}</span>
                <span>•</span>
                <span>{heroAssessment.questionCount} Questions</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                {heroAssessment.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {heroAssessment.description}
              </p>
            </div>

            <Link
              href={`/assessment/${heroAssessment.slug}`}
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto shadow-md">
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </Card>
        </section>
      )}

      {/* Category Discovery Pills */}
      <section aria-labelledby="categories-heading">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="categories-heading"
            className="text-lg font-semibold text-foreground tracking-tight"
          >
            Browse by Domain
          </h2>
          <Link
            href="/explore"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Explore all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/explore?category=${cat.id}`}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Card
                variant="subtle"
                className="p-3.5 sm:p-4 hover:bg-surface hover:border-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Assessments Grid */}
      <section aria-labelledby="popular-heading">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="popular-heading"
            className="text-lg font-semibold text-foreground tracking-tight"
          >
            Popular Assessments
          </h2>
          <Link
            href="/explore"
            className="text-xs font-semibold text-primary hover:underline"
          >
            View all 14
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {popularList.map((assessment) => (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          ))}
        </div>
      </section>

      {/* Defensive Ad Placement with Pre-Allocated Dimensions (Zero CLS) */}
      <AdSlot placement="home" />

      {/* Explore All CTA Banner */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Ready to explore your potential?
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Explore our complete catalog of 14 assessments covering cognitive, productivity,
          wellness, and relationship dynamics.
        </p>
        <Link href="/explore">
          <Button size="lg" variant="primary">
            Explore All Assessments
          </Button>
        </Link>
      </section>
    </div>
  );
}
