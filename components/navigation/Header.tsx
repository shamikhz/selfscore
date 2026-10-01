"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, History, Sparkles } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/results", label: "My Results", icon: History },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground font-semibold text-base sm:text-lg tracking-tight hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-subtle">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
          </div>
          <span>SelfScore</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden sm:flex items-center gap-1 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-surface-subtle text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-subtle/60"
                }`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
