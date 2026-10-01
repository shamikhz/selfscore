"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "pill" | "row";
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  variant = "icon",
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);

    // Sync theme-color meta tag on initial mount
    updateMetaThemeColor(hasDarkClass);
  }, []);

  const updateMetaThemeColor = (darkMode: boolean) => {
    try {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
      }
      metaThemeColor.setAttribute("content", darkMode ? "#0c0a09" : "#fafaf9");
    } catch (_) {}
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("selfscore_theme", "dark");
      } catch (_) {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("selfscore_theme", "light");
      } catch (_) {}
    }

    updateMetaThemeColor(nextDark);
  };

  if (!mounted) {
    // Prevent layout shift before client-side hydration
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-surface-subtle/60 flex items-center justify-center ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-foreground hover:bg-surface-subtle border border-transparent hover:border-surface-border ${className}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-surface-subtle flex items-center justify-center">
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-primary" aria-hidden="true" />
            )}
          </div>
          <span>{isDark ? "Dark Theme" : "Light Theme"}</span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-md bg-surface-subtle text-muted-foreground font-medium">
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground bg-surface-subtle/50 hover:bg-surface-subtle border border-surface-border/60 hover:border-surface-border transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun
            className="w-4 h-4 text-amber-400 transform transition-all duration-300 rotate-0 scale-100 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
            aria-hidden="true"
          />
        ) : (
          <Moon
            className="w-4 h-4 text-muted-foreground hover:text-foreground transform transition-all duration-300 rotate-0 scale-100"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
};
