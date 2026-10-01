"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer: React.FC = () => {
  const pathname = usePathname();

  // Hide general website footer during active question runner to avoid cluttering test buttons
  const isQuestionSession = pathname.includes("/questions");
  if (isQuestionSession) return null;

  return (
    <footer className="w-full border-t border-surface-border bg-surface-subtle/80 sm:bg-surface py-8 pb-28 sm:pb-8 text-xs text-muted mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <div>
          <p className="font-bold text-foreground text-sm">
            SelfScore Assessment Platform
          </p>
          <p className="mt-0.5 text-muted-foreground text-xs max-w-sm sm:max-w-none">
            Informal self-discovery & personal reflection. Not a clinical diagnosis.
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 pt-1 sm:pt-0">
          <Link
            href="/about"
            className="py-1.5 px-3 rounded-lg bg-surface sm:bg-transparent border border-surface-border sm:border-transparent text-foreground/90 hover:text-primary hover:bg-surface-subtle transition-colors text-xs font-medium shadow-xs sm:shadow-none"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="py-1.5 px-3 rounded-lg bg-surface sm:bg-transparent border border-surface-border sm:border-transparent text-foreground/90 hover:text-primary hover:bg-surface-subtle transition-colors text-xs font-medium shadow-xs sm:shadow-none"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="py-1.5 px-3 rounded-lg bg-surface sm:bg-transparent border border-surface-border sm:border-transparent text-foreground/90 hover:text-primary hover:bg-surface-subtle transition-colors text-xs font-medium shadow-xs sm:shadow-none"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};
