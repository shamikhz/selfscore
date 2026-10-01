"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, History, Info } from "lucide-react";

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  // Hide bottom nav during active question sessions to maintain focus
  const isQuestionSession = pathname.includes("/questions");
  if (isQuestionSession) return null;

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/results", label: "Results", icon: History },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-surface-border pb-safe shadow-raised"
    >
      <div className="flex items-center justify-around h-16 px-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full min-h-touch py-1 px-2 transition-colors select-none no-select ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-transform ${
                  isActive ? "scale-110" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "stroke-[2.5]" : "stroke-[1.75]"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
