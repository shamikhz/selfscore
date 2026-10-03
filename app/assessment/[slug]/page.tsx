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

export const dynamicParams = false;

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

  const canonicalUrl = `https://selfscore.pages.dev/assessment/${params.slug}`;

  return {
    title: `${assessment.title} | SelfScore`,
    description: assessment.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${assessment.title} | SelfScore`,
      description: assessment.description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: "/icons/icon-512.png",
          width: 512,
          height: 512,
          alt: `${assessment.title} on SelfScore`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${assessment.title} | SelfScore`,
      description: assessment.description,
      images: ["/icons/icon-512.png"],
    },
  };
}

export default function AssessmentPage({ params }: Props) {
  const assessment = getAssessmentBySlug(params.slug);

  if (!assessment) {
    notFound();
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: assessment.title,
    description: assessment.description,
    educationalLevel: "Self-Reflection & Personal Discovery",
    about: {
      "@type": "Thing",
      name: assessment.category,
    },
    provider: {
      "@type": "Organization",
      name: "SelfScore",
      url: "https://selfscore.pages.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssessmentIntro assessment={assessment} />
    </>
  );
}
