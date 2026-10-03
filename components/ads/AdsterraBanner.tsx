"use client";

import React, { useEffect, useRef, useState } from "react";
import { ADSTERRA_KEYS } from "./AdKeys";

export interface AdsterraBannerProps {
  adKey: string;
  width?: number;
  height?: number;
  className?: string;
  label?: string;
}

/**
 * Robust, zero-CLS Adsterra banner renderer using isolated iframe execution.
 * Prevents global variable collisions (atOptions) and React re-render conflicts.
 */
export const AdsterraBanner: React.FC<AdsterraBannerProps> = ({
  adKey,
  width = 300,
  height = 250,
  className = "",
  label = "Advertisement",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const container = containerRef.current;
    if (!container || !adKey) return;

    // Clean container to avoid duplicate iframes on component update
    container.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.maxWidth = "100%";
    iframe.scrolling = "no";
    iframe.title = `${label} ${width}x${height}`;
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
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                overflow: hidden;
              }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key' : '${adKey}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="${ADSTERRA_KEYS.INVOKE_HOST}/${adKey}/invoke.js"></script>
          </body>
        </html>
      `);
      iframeDoc.close();
    } catch (err) {
      console.warn("[AdsterraBanner] Could not write to iframe:", err);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [adKey, width, height, isClient, label]);

  if (!adKey) return null;

  return (
    <div
      className={`relative flex flex-col items-center justify-center mx-auto overflow-hidden ${className}`}
      style={{
        minHeight: `${height}px`,
        maxWidth: `${width}px`,
        width: "100%",
      }}
    >
      <div
        ref={containerRef}
        className="w-full flex items-center justify-center overflow-hidden"
        style={{
          minHeight: `${height}px`,
        }}
      />
    </div>
  );
};

export default AdsterraBanner;
