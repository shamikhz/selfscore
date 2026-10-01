import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";
import { getAssessmentDefinition } from "@/assessments/registry";
import { QuestionRunner } from "@/components/assessment/QuestionRunner";

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
  const definition = getAssessmentDefinition(params.slug);
  if (!definition) {
    return {
      title: "Assessment Not Found",
    };
  }

  return {
    title: `${definition.meta.title} — Questions | SelfScore`,
    description: `Complete the ${definition.meta.title} self-assessment to discover your profile.`,
    robots: {
      index: false, // Prevent search engines from indexing live test questions
    },
  };
}

export default function AssessmentQuestionsPage({ params }: Props) {
  const definition = getAssessmentDefinition(params.slug);

  if (!definition) {
    notFound();
    return null;
  }

  return (
    <QuestionRunner
      slug={definition.meta.slug}
      meta={definition.meta}
      questions={definition.questions}
      tiers={definition.tiers}
    />
  );
}
