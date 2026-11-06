"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type Tone = "yes" | "no";

/** One check / cross row. Long text is clamped to two lines with a per-row "Read more". */
function ChecklistItem({ text, tone }: { text: string; tone: Tone }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [clamped, setClamped] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (!open) setClamped(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text, open]);

  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-800/85">
      <span
        aria-hidden
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
          tone === "yes" ? "bg-amber-100 text-olive-800" : "bg-red-100 text-red-700"
        }`}
      >
        {tone === "yes" ? "✓" : "✕"}
      </span>
      <span className="min-w-0 flex-1">
        <span ref={ref} className={open ? "" : "line-clamp-2"}>
          {text}
        </span>
        {(clamped || open) && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-0.5 text-xs font-semibold text-maroon-700 underline-offset-4 hover:underline"
          >
            {open ? t("tour.showLess") : t("tour.readMore")}
          </button>
        )}
      </span>
    </li>
  );
}

/** Check / cross list that shows the first few items and reveals the rest on demand. */
export function ChecklistWithMore({
  items,
  tone,
  limit = 5,
}: {
  items: string[];
  tone: Tone;
  limit?: number;
}) {
  const { t } = useLanguage();
  const [all, setAll] = useState(false);
  const shown = all ? items : items.slice(0, limit);

  return (
    <div>
      <ul className="space-y-3">
        {shown.map((item, i) => (
          <ChecklistItem key={`${i}-${item.slice(0, 12)}`} text={item} tone={tone} />
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
