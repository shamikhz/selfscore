"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { ASSESSMENTS_CATALOG, CATEGORIES } from "@/lib/assessments-catalog";
import { AssessmentCard } from "@/components/assessment/AssessmentCard";
import { AdSlot } from "@/components/ads/AdSlot";
import { AssessmentCategory } from "@/types/assessment";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredAssessments = useMemo(() => {
    return ASSESSMENTS_CATALOG.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dimensions.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Explore Assessments
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Discover all 14 personal reflection assessments organized by life domain.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <label htmlFor="assessment-search" className="sr-only">
          Search assessments
        </label>
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
          <Search className="w-4 h-4" aria-hidden="true" />
        </div>
        <input
          id="assessment-search"
          type="search"
          placeholder="Search by topic, skill, or keyword (e.g. sleep, focus)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full min-h-touch pl-10 pr-4 py-2.5 rounded-xl border border-surface-border bg-surface text-foreground placeholder:text-muted text-sm shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>

      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter by category"
        className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-select"
      >
        <button
          role="tab"
          aria-selected={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
          className={`min-h-touch px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedCategory === "all"
              ? "bg-primary text-primary-foreground shadow-subtle"
              : "bg-surface border border-surface-border text-muted-foreground hover:text-foreground hover:bg-surface-subtle"
          }`}
        >
          All (14)
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = ASSESSMENTS_CATALOG.filter(
            (a) => a.category === cat.id
          ).length;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-touch px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors capitalize ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-subtle"
                  : "bg-surface border border-surface-border text-muted-foreground hover:text-foreground hover:bg-surface-subtle"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Results Count and List */}
      <div>
        <div className="flex items-center justify-between text-xs text-muted mb-4 font-medium">
          <span>Showing {filteredAssessments.length} assessments</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-primary hover:underline font-semibold"
            >
              Clear search
            </button>
          )}
        </div>

        {filteredAssessments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredAssessments.map((assessment) => (
              <AssessmentCard key={assessment.id} assessment={assessment} />
            ))}
          </div>
        ) : (
          <div className="p-10 rounded-2xl bg-surface border border-surface-border text-center space-y-3">
            <Sparkles className="w-8 h-8 text-muted mx-auto" aria-hidden="true" />
            <h2 className="text-base font-semibold text-foreground">
              No matching assessments found
            </h2>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              We couldn’t find any assessments matching &ldquo;{searchQuery}&rdquo;. Try another
              keyword or select a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-2 text-xs font-semibold text-primary hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Explore Page Ad Slot (Zero CLS) */}
      <AdSlot placement="explore" className="mt-8" />
    </div>
  );
}
