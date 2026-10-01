import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAssessmentBySlug, ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro";

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
    title: `${assessment.title} | SelfScore`,
    description: assessment.description,
    openGraph: {
      title: `${assessment.title} | SelfScore`,
      description: assessment.description,
      type: "website",
    },
  };
}

export default function AssessmentPage({ params }: Props) {
  const assessment = getAssessmentBySlug(params.slug);

  if (!assessment) {
    notFound();
    return null;
  }

  return <AssessmentIntro assessment={assessment} />;
}
