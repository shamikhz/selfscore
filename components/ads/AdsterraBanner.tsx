
"use client";

import React, { useEffect, useRef } from "react";

export interface AdsterraBannerProps {
  adKey: string;
  width?: number;
  height?: number;
  className?: string;
}

export const AdsterraBanner: React.FC<AdsterraBannerProps> = ({
  adKey,
  width = 300,
  height = 250,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !adKey) return;

    // Clean container to avoid duplicate scripts during re-renders
    container.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";
    iframe.title = `Adsterra Ad ${width}x${height}`;

    container.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document;
    if (!iframeDoc) return;

    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
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
          <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `);
    iframeDoc.close();

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [adKey, width, height]);

  if (!adKey) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center max-w-full overflow-hidden mx-auto ${className}`}
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
    />
  );
};

export default AdsterraBanner;
