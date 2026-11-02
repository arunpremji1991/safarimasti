"use client";

import { useState } from "react";
import { ItineraryStop } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";

const preview = (text: string, max = 110) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text);

/** Day-by-day plan as a collapsible list so the page stays scannable. */
export function ItineraryAccordion({ stops }: { stops: ItineraryStop[] }) {
  const { t, pick } = useLanguage();
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const allOpen = open.size === stops.length;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div>
      {stops.length > 1 && (
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(stops.map((_, i) => i)))}
          className="mb-4 text-sm font-semibold text-maroon-700 underline-offset-4 hover:underline"
        >
          {allOpen ? t("tour.collapseAll") : t("tour.expandAll")}
        </button>
      )}
      <ol className="space-y-3">
        {stops.map((stop, i) => {
          const isOpen = open.has(i);
          const description = pick(stop.description, stop.descriptionAr);
          return (
            <li
              key={stop.label}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? "border-amber-500/60 bg-cream-100/70" : "border-charcoal-950/10 bg-white hover:border-amber-500/50"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 p-4 text-start sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-maroon-800 text-cream-50">
                  <span className="text-[9px] font-semibold uppercase leading-none tracking-wider text-amber-300">
                    {pick(stop.label, stop.labelAr).replace(/\s*\d+\s*$/, "") || "·"}
                  </span>
                  <span className="font-display text-lg leading-none">{i + 1}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-display block text-lg leading-snug text-charcoal-950">{pick(stop.title, stop.titleAr)}</span>
                  {!isOpen && <span className="mt-1 block text-sm text-charcoal-800/65">{preview(description)}</span>}
                </span>
                <svg
                  viewBox="0 0 20 20"
                  className={`mt-1 h-5 w-5 shrink-0 text-charcoal-800/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M5.5 7.5l4.5 5 4.5-5z" />
                </svg>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-charcoal-800/80 sm:ps-[5.25rem]">{description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
