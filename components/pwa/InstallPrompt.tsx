"use client";

import React, { useEffect, useState } from "react";
import { Download, X, Share2, PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

const DISMISS_KEY = "selfscore_install_dismissed_until";
const SNOOZE_DAYS = 7;

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // 1. If running as standalone PWA already, do not show prompt
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      return;
    }

    // 2. Check if dismissed recently
    try {
      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
        return;
      }
    } catch {
      // Storage access blocked or unavailable
    }

    // 3. Detect iOS Safari
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(ua);
    const isSafari = /safari/.test(ua) && !/chrome|crios|fxios/.test(ua);

    if (isIOSDevice && isSafari) {
      setIsIOS(true);
      // Wait 3 seconds after page load before displaying to avoid interruptive feel
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }

    // 4. Listen for Chromium beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Wait 2 seconds before showing
      setTimeout(() => setIsVisible(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for successful install to dismiss
    const handleAppInstalled = () => {
      setIsVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setShowIOSGuide(false);
    try {
      const snoozeExpiry = Date.now() + SNOOZE_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, snoozeExpiry.toString());
    } catch {
      // Ignore
    }
  };

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.warn("[PWA] Installation prompt error:", err);
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Install App Prompt"
      className="fixed z-50 bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 max-w-sm mx-auto sm:mx-0 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="p-4 rounded-2xl bg-surface/95 backdrop-blur-md border border-surface-border shadow-raised space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              S
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground tracking-tight">
                Install SelfScore App
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                Fast offline access & distraction-free reflection.
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss installation prompt"
            className="p-1 rounded-lg text-muted hover:text-foreground hover:bg-surface-subtle transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {showIOSGuide ? (
          <div className="p-2.5 rounded-xl bg-surface-subtle text-xs text-foreground space-y-1.5 border border-surface-border">
            <p className="font-semibold text-primary">To install on iOS:</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Share2 className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>1. Tap the Share button in Safari toolbar</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PlusSquare className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              <span>2. Scroll down and tap &lsquo;Add to Home Screen&rsquo;</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 pt-1">
            <Button
              variant="primary"
              size="sm"
              onClick={handleInstallClick}
              className="flex-1 font-semibold"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              <span>{isIOS ? "How to Install" : "Install"}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-xs text-muted hover:text-foreground"
            >
              Not now
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};
