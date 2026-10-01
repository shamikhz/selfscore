"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[App Error Boundary]:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 animate-in fade-in duration-200">
      <Card variant="default" className="max-w-md w-full p-6 sm:p-8 text-center space-y-5 shadow-raised">
        <div className="w-12 h-12 rounded-2xl bg-danger/10 text-danger flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Something unexpected happened
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We encountered a temporary issue while rendering this page. Your saved test results and local progress remain safe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={() => reset()}
            className="font-medium"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>

          <Link href="/" className="w-full">
            <Button variant="outline" size="md" fullWidth>
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
