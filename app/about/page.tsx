import React from "react";
import Link from "next/link";
import { Sparkles, Shield, Heart, Compass, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About SelfScore",
  description:
    "Learn about our mission to provide human-centered, private self-assessments for cognitive, emotional, and personal growth.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Shield,
      title: "Private by Design",
      description:
        "Your answers and scores are saved only in your device's local storage. We collect zero personal identifying information (PII) and require no account registration.",
    },
    {
      icon: Heart,
      title: "Human & Constructive",
      description:
        "We reject clinical jargon, shaming scores, and robotic labels. Our insights highlight validated strengths and achievable, compassionate micro-habits.",
    },
    {
      icon: Compass,
      title: "Transparent & Grounded",
      description:
        "We clearly distinguish informal self-assessments from medical or psychiatric diagnostic tools. We never make unsubstantiated claims about scientific infallibility.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          About SelfScore
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          SelfScore is a mobile-first self-discovery platform built to help curious minds
          reflect on focus, personality, cognitive patterns, and daily habits.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Our Core Principles</h2>
        <div className="grid grid-cols-1 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} variant="default" className="p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Legal & Transparency Links */}
      <div className="p-5 rounded-2xl bg-surface border border-surface-border space-y-3">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Legal & Transparency
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          SelfScore operates with complete privacy: no user tracking, no backend database for your test answers, and zero data selling.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline bg-primary-subtle/80 px-3 py-1.5 rounded-lg border border-primary/20"
          >
            <span>Privacy Policy</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground hover:underline bg-surface-subtle px-3 py-1.5 rounded-lg border border-surface-border"
          >
            <span>Terms of Service</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-surface border border-surface-border text-center space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Start Your Reflection</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Explore our collection of 20 assessments across mind, wellbeing, productivity,
          finance, and relationships.
        </p>
        <Link href="/explore">
          <Button size="md">
            <span>Explore All Assessments</span>
            <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
