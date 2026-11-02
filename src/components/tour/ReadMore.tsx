"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Long text clamped to a few lines with a Read more / Show less toggle. */
export function ReadMore({ text, className = "", threshold = 320 }: { text: string; className?: string; threshold?: number }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const long = text.length > threshold;

  return (
    <div>
      <p className={`${className} ${long && !open ? "line-clamp-4" : ""}`}>{text}</p>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-2 text-sm font-semibold text-maroon-700 underline-offset-4 hover:underline"
        >
          {open ? t("tour.showLess") : t("tour.readMore")}
        </button>
      )}
    </div>
  );
}
