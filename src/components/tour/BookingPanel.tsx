"use client";

import Link from "next/link";
import { Tour } from "@/data/types";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function BookingPanel({ tour }: { tour: Tour }) {
  const { t } = useLanguage();
  const customizeHref = `/build-your-journey?tour=${tour.slug}`;

  return (
    <>
      {/* Desktop sticky panel */}
      <div className="sticky top-28 hidden rounded-2xl border border-charcoal-950/10 bg-cream-50 p-6 shadow-sm lg:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{t("tour.price")}</p>
        <p className="font-display mt-1 text-2xl text-charcoal-950">{t("tour.requestQuote")}</p>
        <p className="mt-1 text-sm text-charcoal-800/60">{t("tour.pricedAround")}</p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={customizeHref}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
          >
            {t("tour.planThisJourney")}
          </Link>
          <Link
            href={customizeHref}
            className="inline-flex items-center justify-center rounded-full border border-maroon-800 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-800 hover:bg-maroon-50"
          >
            {t("tour.customizeThisJourney")}
          </Link>
        </div>

        <div className="mt-6 space-y-2 border-t border-charcoal-950/10 pt-5 text-sm text-charcoal-800/70">
          <a href={site.phoneHref} className="block hover:text-maroon-700">
            {t("tour.callPrefix")} <span dir="ltr">{site.phone}</span>
          </a>
          <a href={site.emailHref} className="block hover:text-maroon-700" dir="ltr">
            {site.email}
          </a>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-charcoal-950/10 bg-cream-50 p-4 lg:hidden">
        <Link
          href={customizeHref}
          className="flex-1 rounded-full border border-maroon-800 py-3 text-center text-xs font-semibold uppercase tracking-wide text-maroon-800"
        >
          {t("tour.customize")}
        </Link>
        <Link
          href={customizeHref}
          className="flex-1 rounded-full bg-amber-500 py-3 text-center text-xs font-semibold uppercase tracking-wide text-maroon-950"
        >
          {t("tour.planJourney")}
        </Link>
      </div>
    </>
  );
}
