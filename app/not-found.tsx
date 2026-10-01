import React from "react";
import Link from "next/link";
import { Compass, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 animate-in fade-in duration-200">
      <Card variant="default" className="max-w-md w-full p-6 sm:p-8 text-center space-y-5 shadow-raised">
        <div className="w-12 h-12 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center mx-auto">
          <Search className="w-6 h-6" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            404 Error
          </span>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The assessment or page you are looking for does not exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link href="/explore" className="w-full">
            <Button variant="primary" size="md" fullWidth className="font-medium">
              <Compass className="w-4 h-4 mr-2" />
              <span>Explore All Tests</span>
            </Button>
          </Link>

          <Link href="/" className="w-full">
            <Button variant="outline" size="md" fullWidth>
              <Home className="w-4 h-4 mr-2" />
              <span>Back Home</span>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
