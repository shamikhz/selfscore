import { redirect } from "next/navigation";
import { ASSESSMENTS_CATALOG } from "@/lib/assessments-catalog";

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

export default function AssessmentStartRedirect({ params }: Props) {
  // Start redirects directly to the question session
  redirect(`/assessment/${params.slug}/questions`);
}
