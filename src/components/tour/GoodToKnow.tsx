"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function GoodToKnow({
  items,
}: {
  items: { label: string; content: string; labelAr?: string; contentAr?: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { pick } = useLanguage();

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-charcoal-950/10 overflow-hidden rounded-2xl border border-charcoal-950/10 bg-white">
      {items.map((item, i) => (
        <div key={item.label}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-start font-semibold text-charcoal-950 hover:bg-amber-100/40"
            aria-expanded={openIndex === i}
          >
            {pick(item.label, item.labelAr)}
            <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-200 text-lg leading-none">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="px-6 pb-5 text-charcoal-800/75">{pick(item.content, item.contentAr)}</p>
          )}
        </div>
      ))}
    </div>
  );
}
