"use client";

import React, { useEffect, useRef, useState } from "react";
import { ADSTERRA_KEYS } from "./AdKeys";

export interface AdsterraNativeProps {
  className?: string;
}

/**
 * Adsterra Native Recommendations / Social Bar Unit.
 * Mounts in an isolated container to ensure safe script execution and no layout shift.
 */
export const AdsterraNative: React.FC<AdsterraNativeProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "160";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";
    iframe.title = "Sponsored Recommendations";
    iframe.setAttribute("loading", "lazy");

    container.appendChild(iframe);

    try {
      const iframeDoc = iframe.contentWindow?.document;
      if (!iframeDoc) return;

      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
              * { box-sizing: border-box; }
              html, body {
                margin: 0;
                padding: 0;
                width: 100%;
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              #${ADSTERRA_KEYS.NATIVE_CONTAINER_ID} {
                width: 100%;
                min-height: 140px;
              }
            </style>
          </head>
          <body>
            <div id="${ADSTERRA_KEYS.NATIVE_CONTAINER_ID}"></div>
            <script async="async" data-cfasync="false" src="${ADSTERRA_KEYS.NATIVE_SCRIPT_SRC}"></script>
          </body>
        </html>
      `);
      iframeDoc.close();
    } catch (err) {
      console.warn("[AdsterraNative] Could not write to iframe:", err);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [isClient]);

  return (
    <div
      className={`w-full max-w-4xl mx-auto my-4 overflow-hidden rounded-xl border border-surface-border bg-surface-subtle/50 p-2 sm:p-3 text-center ${className}`}
      style={{ minHeight: "160px" }}
    >
      <div className="text-[10px] font-semibold tracking-wider uppercase text-muted mb-1 text-left px-2">
        Recommended For You
      </div>
      <div ref={containerRef} className="w-full flex items-center justify-center min-h-[140px]" />
    </div>
  );
};

export default AdsterraNative;
