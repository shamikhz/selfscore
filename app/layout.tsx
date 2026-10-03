import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { PwaRegister } from "@/components/PwaRegister";

export const metadata: Metadata = {
  metadataBase: new URL("https://selfscore.pages.dev"),
  title: {
    template: "%s | SelfScore",
    default: "SelfScore — Thoughtful Self-Assessments for Personal Growth",
  },
  description:
    "Mobile-first, private assessments for cognitive patterns, personality, productivity, stress, and financial habits. 100% local, no login required.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SelfScore",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selfscore.pages.dev",
    siteName: "SelfScore",
    title: "SelfScore — Thoughtful Self-Assessments",
    description:
      "Private, human-designed self-assessments for personal discovery. No account required.",
    images: [
      {
        url: "/icons/icon-512.png",
        width: 512,
        height: 512,
        alt: "SelfScore Assessment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SelfScore — Thoughtful Self-Assessments",
    description:
      "Private, evidence-inspired self-assessments for personal discovery and cognitive reflection.",
    images: ["/icons/icon-512.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary-subtle selection:text-primary transition-colors duration-200">
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
          className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-6 sm:pb-12"
        >
          {children}
        </main>

        {/* Universal Website Footer */}
        <Footer />

        {/* Mobile-First Bottom Navigation Bar */}
        <BottomNav />

        {/* Offline PWA Service Worker Hook */}
        <PwaRegister />
      </body>
    </html>
  );
}

