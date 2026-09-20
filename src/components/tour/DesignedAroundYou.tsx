"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export function DesignedAroundYou({ tourSlug }: { tourSlug: string }) {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl bg-maroon-950 p-8 text-cream-50 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
        {t("tour.designedAroundYouEyebrow")}
      </p>
      <h3 className="font-display mt-3 text-2xl md:text-3xl">{t("tour.designedAroundYouTitle")}</h3>
      <p className="mt-3 max-w-xl text-cream-100/80">{t("tour.designedAroundYouBody")}</p>
      <Link
        href={`/build-your-journey?tour=${tourSlug}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
      >
        {t("nav.buildYourJourney")} <span aria-hidden className="inline-block rtl:rotate-180">→</span>
      </Link>
    </div>
  );
}
