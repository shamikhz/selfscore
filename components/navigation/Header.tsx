"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, History, Sparkles, Info, Shield, FileText, Menu, X, Home } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/explore", label: "Explore", icon: Compass },
    { href: "/results", label: "My Results", icon: History },
    { href: "/about", label: "About", icon: Info },
  ];

  const mobileLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore All Tests", icon: Compass },
    { href: "/results", label: "My Results", icon: History },
    { href: "/about", label: "About Platform", icon: Info },
    { href: "/privacy", label: "Privacy Policy", icon: Shield },
    { href: "/terms", label: "Terms of Service", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 text-foreground font-semibold text-base sm:text-lg tracking-tight hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
        >
          <div className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-subtle">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="font-bold">SelfScore</span>
        </Link>

        {/* Right Section: Desktop Navigation & Theme Toggle */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "bg-surface-subtle text-primary font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-subtle/70"
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle Button (Visible on all devices) */}
          <div className="border-l border-surface-border pl-1 sm:pl-2 ml-1">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ml-0.5"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-surface-border shadow-raised px-4 py-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {mobileLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-subtle/80 text-primary font-semibold"
                    : "text-foreground/90 hover:bg-surface-subtle"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted"}`} aria-hidden="true" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Mobile Drawer Theme Toggle Row */}
          <div className="pt-2 mt-2 border-t border-surface-border">
            <ThemeToggle variant="row" />
          </div>
        </div>
      )}
    </header>
  );
};
