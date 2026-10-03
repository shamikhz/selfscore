"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

export const PwaRegister: React.FC = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (process.env.NODE_ENV === "production") {
        const registerServiceWorker = async () => {
          try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
              scope: "/",
            });

            // Check for periodic background updates
            registration.addEventListener("updatefound", () => {
              const installingWorker = registration.installing;
              if (installingWorker) {
                installingWorker.addEventListener("statechange", () => {
                  if (
                    installingWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    console.log("[PWA] New version available and ready.");
                    setUpdateAvailable(true);
                  }
                });
              }
            });
          } catch (error) {
            console.warn("[PWA] Service Worker registration failed:", error);
          }
        };

        if (document.readyState === "complete") {
          registerServiceWorker();
        } else {
          window.addEventListener("load", registerServiceWorker);
        }
      } else {
        // In development mode, unregister any active service worker
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
      }
    }
  }, []);

  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  if (!updateAvailable) return null;

  return (
    <aside
      aria-label="Application Update Notice"
      className="fixed bottom-20 sm:bottom-6 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-foreground text-background shadow-raised border border-foreground/10 text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
        <span>New updates available</span>
        <button
          type="button"
          onClick={handleReload}
          className="inline-flex items-center gap-1 ml-1 px-2.5 py-1 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <RefreshCw className="w-3 h-3" aria-hidden="true" />
          <span>Refresh</span>
        </button>
      </div>
    </aside>
  );
};
