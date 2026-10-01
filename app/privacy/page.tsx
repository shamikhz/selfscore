import React from "react";
import { ShieldCheck, Lock, HardDrive, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Privacy Policy",
  description: "SelfScore Privacy Policy: 100% local persistence, zero accounts, zero personal data collection.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          At SelfScore, we believe your personal reflections and habits belong to you alone.
          Our platform is architected around strict data minimization and local-first storage.
        </p>
      </div>

      <div className="space-y-4">
        <Card variant="default" className="p-5 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Lock className="w-4 h-4" aria-hidden="true" />
            <span>1. Zero Personal Information Required</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We never ask for your name, email address, phone number, location, or social login.
            You can take any assessment without creating an account or providing any identifiable information.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <HardDrive className="w-4 h-4" aria-hidden="true" />
            <span>2. Local Device Storage</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            When you complete an assessment, your score and category dimensions are saved solely
            within your browser&apos;s local storage (`localStorage`). This data never leaves your device
            unless you explicitly choose to share your score link via the Web Share API.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <EyeOff className="w-4 h-4" aria-hidden="true" />
            <span>3. No Cross-Site User Tracking</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We do not sell user data, track individual users across the web, or build advertising
            profiles based on your assessment answers.
          </p>
        </Card>

        <Card variant="default" className="p-5 space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>4. Clearing Your Data</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You can delete all saved assessment results at any time by clearing your browser&apos;s site data
            or clicking &ldquo;Clear Data&rdquo; in the My Results section.
          </p>
        </Card>
      </div>

      <p className="text-xs text-muted">
        Last updated: October 2026. For questions regarding our privacy practices, contact privacy@selfscore.local.
      </p>
    </div>
  );
}
