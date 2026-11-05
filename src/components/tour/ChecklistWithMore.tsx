"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Check / cross list that shows the first few items and reveals the rest on demand. */
export function ChecklistWithMore({
  items,
  tone,
  limit = 6,
}: {
  items: string[];
  tone: "yes" | "no";
  limit?: number;
}) {
  const { t } = useLanguage();
  const [all, setAll] = useState(false);
  const shown = all ? items : items.slice(0, limit);

  return (
    <div>
      <ul className="space-y-3">
        {shown.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-charcoal-800/85">
            <span
              aria-hidden
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                tone === "yes" ? "bg-amber-100 text-olive-800" : "bg-red-100 text-red-700"
              }`}
            >
              {tone === "yes" ? "✓" : "✕"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {items.length > limit && (
        <button
          type="button"
          onClick={() => setAll((v) => !v)}
          className="mt-4 text-sm font-semibold text-maroon-700 underline-offset-4 hover:underline"
        >
          {all ? t("tour.showLess") : `${t("tour.showAll")} (${items.length})`}
        </button>
      )}
    </div>
  );
}
