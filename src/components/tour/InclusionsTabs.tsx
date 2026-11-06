"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChecklistWithMore } from "@/components/tour/ChecklistWithMore";

/** "What's included" / "What's not included" as two tabs, so only one list is on screen at a time. */
export function InclusionsTabs({ inclusions, exclusions }: { inclusions: string[]; exclusions: string[] }) {
  const { t } = useLanguage();
  const tabs = [
    { key: "yes" as const, label: t("tour.whatsIncluded"), items: inclusions },
    { key: "no" as const, label: t("tour.whatsNotIncluded"), items: exclusions },
  ].filter((tab) => tab.items.length > 0);
  const [active, setActive] = useState<"yes" | "no">(tabs[0]?.key ?? "yes");
  const current = tabs.find((tab) => tab.key === active) ?? tabs[0];
  if (!current) return null;

  return (
    <div className="rounded-2xl border border-charcoal-950/10 bg-white p-5 sm:p-6">
      {tabs.length > 1 && (
        <div role="tablist" className="mb-5 flex gap-1 rounded-full bg-cream-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`inc-tab-${tab.key}`}
              aria-selected={current.key === tab.key}
              aria-controls="inc-panel"
              onClick={() => setActive(tab.key)}
              className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                current.key === tab.key ? "bg-maroon-900 text-cream-50 shadow-sm" : "text-charcoal-800/70 hover:text-maroon-800"
              }`}
            >
              {tab.label}
              <span className={`ms-1.5 text-xs ${current.key === tab.key ? "text-amber-300" : "text-charcoal-800/50"}`}>
                {tab.items.length}
              </span>
            </button>
          ))}
        </div>
      )}
      <div role="tabpanel" id="inc-panel" aria-labelledby={`inc-tab-${current.key}`}>
        <ChecklistWithMore key={current.key} tone={current.key} items={current.items} />
      </div>
    </div>
  );
}
