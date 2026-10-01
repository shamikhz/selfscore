import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { WifiOff, RotateCcw, Home, Compass, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RecentResults } from "@/components/RecentResults";

export const metadata: Metadata = {
  title: "Offline Mode | SelfScore",
  description: "You are currently browsing SelfScore offline. Your saved assessment results are securely preserved on this device.",
};

export default function OfflinePage() {
  return (
    <div className="space-y-8 sm:space-y-10 py-4 max-w-xl mx-auto animate-in fade-in duration-300">
      {/* Offline Status Hero */}
      <Card variant="subtle" className="p-6 sm:p-8 text-center space-y-4 border-surface-border">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
          <WifiOff className="w-7 h-7" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700">
            Offline Mode Active
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            No Internet Connection Detected
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            You are currently offline, but you don’t need to worry. Because SelfScore runs locally on your device, your previous assessment results remain fully available.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Go to Home</span>
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" size="md" className="w-full sm:w-auto">
              <Compass className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Browse Catalog</span>
            </Button>
          </Link>
        </div>
      </Card>

      {/* Local Privacy & Offline Capability Note */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-surface-border text-xs text-muted-foreground">
        <ShieldCheck className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <strong className="font-semibold text-foreground">Privacy-First Architecture:</strong>
          <span className="ml-1">
            All your question responses, calculated scores, and growth recommendations are stored exclusively inside your browser&apos;s local storage. None of your data depends on external cloud servers.
          </span>
        </div>
      </div>

      {/* Offline-Accessible Saved Results */}
      <div>
        <h2 className="text-base font-semibold text-foreground mb-3">
          Your Saved Results (Offline Available)
        </h2>
        <RecentResults />
      </div>
    </div>
  );
}
