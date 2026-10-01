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
  }, []);

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
  };

  if (!mounted) {
    // Avoid layout shift before mount
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-surface-subtle/50 flex items-center justify-center ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-foreground/90 hover:bg-surface-subtle ${className}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="flex items-center gap-3">
          {isDark ? (
            <Moon className="w-4 h-4 text-primary" aria-hidden="true" />
          ) : (
            <Sun className="w-4 h-4 text-accent" aria-hidden="true" />
          )}
          <span>{isDark ? "Dark Theme" : "Light Theme"}</span>
        </div>
        <span className="text-xs text-muted font-normal">
          {isDark ? "Tap for Light" : "Tap for Dark"}
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
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-subtle transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-200 rotate-0 scale-100" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-muted-foreground hover:text-foreground transition-transform duration-200 rotate-0 scale-100" aria-hidden="true" />
      )}
    </button>
  );
};
