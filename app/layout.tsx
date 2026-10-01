import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { BottomNav } from "@/components/navigation/BottomNav";
import { PwaRegister } from "@/components/PwaRegister";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";

export const metadata: Metadata = {
  title: {
    template: "%s | SelfScore",
    default: "SelfScore — Thoughtful Self-Assessments for Personal Growth",
  },
  description:
    "Mobile-first, private assessments for cognitive patterns, personality, productivity, stress, and financial habits. 100% local, no login required.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SelfScore",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SelfScore",
    title: "SelfScore — Thoughtful Self-Assessments",
    description:
      "Private, human-designed self-assessments for personal discovery. No account required.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary-subtle selection:text-primary">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-md"
        >
          Skip to content
        </a>

        {/* Top Header Navigation */}
        <Header />

        {/* Main Content Landmark */}
        <main
          id="main-content"
          className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-12"
        >
          {children}
        </main>

        {/* Universal Footer (Visible on Mobile, Tablet & Desktop) */}
        <footer className="border-t border-surface-border bg-surface py-8 pb-28 sm:pb-8 text-xs text-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-xs">
                SelfScore Assessment Platform
              </p>
              <p className="mt-1 text-muted-foreground text-xs max-w-sm sm:max-w-none">
                Informal self-discovery & personal reflection. Not a clinical diagnosis.
              </p>
            </div>

            <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 pt-2 sm:pt-0">
              <Link
                href="/about"
                className="py-1 px-2.5 rounded-md hover:text-foreground hover:bg-surface-subtle transition-colors text-xs font-medium text-foreground/80"
              >
                About
              </Link>
              <span className="text-surface-border hidden sm:inline" aria-hidden="true">•</span>
              <Link
                href="/privacy"
                className="py-1 px-2.5 rounded-md hover:text-foreground hover:bg-surface-subtle transition-colors text-xs font-medium text-foreground/80"
              >
                Privacy Policy
              </Link>
              <span className="text-surface-border hidden sm:inline" aria-hidden="true">•</span>
              <Link
                href="/terms"
                className="py-1 px-2.5 rounded-md hover:text-foreground hover:bg-surface-subtle transition-colors text-xs font-medium text-foreground/80"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </footer>

        {/* Mobile-First Bottom Navigation Bar */}
        <BottomNav />

        {/* Offline PWA Service Worker Hook */}
        <PwaRegister />

        {/* Mobile Install App Prompt */}
        <InstallPrompt />
      </body>
    </html>
  );
}

