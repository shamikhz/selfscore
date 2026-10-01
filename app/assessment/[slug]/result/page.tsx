import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAssessmentBySlug, ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";
import { ResultView } from "@/components/results/ResultView";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ASSESSMENTS_CATALOG.map((assessment) => ({
    slug: assessment.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const assessment = getAssessmentBySlug(params.slug);
  if (!assessment) {
    return {
      title: "Assessment Not Found",
    };
  }

  return {
    title: `${assessment.title} — Results & Profile | SelfScore`,
    description: `View your personalized score breakdown, strengths, and recommended steps for ${assessment.title}.`,
    robots: {
      index: false, // Do not index personal result pages
    },
  };
}

export default function AssessmentResultPage({ params }: Props) {
  const assessment = getAssessmentBySlug(params.slug);

  if (!assessment) {
    notFound();
    return null;
  }

  return <ResultView assessment={assessment} />;
}
