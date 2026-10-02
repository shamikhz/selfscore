"use client";

import { useEffect } from "react";

export const PwaRegister: React.FC = () => {
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
                    console.log("[PWA] New version available and cached in background.");
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
        // In development mode, unregister any active service worker to prevent CSS/chunk caching 500s
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
      }
    }
  }, []);

  return null;
};
