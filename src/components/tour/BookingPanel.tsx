"use client";

import { Tour } from "@/data/types";
import { site } from "@/data/site";
import { formatInr } from "@/lib/format";
import { priceCaption } from "@/lib/pricing";
import { useLanguage } from "@/i18n/LanguageContext";

export function BookingPanel({ tour, onOpen }: { tour: Tour; onOpen: () => void }) {
  const { t, locale } = useLanguage();
  const amounts = tour.pricing?.options.map((o) => o.amountInr) ?? [];
  const lowest = amounts.length ? Math.min(...amounts) : undefined;
  const priceText =
    lowest === undefined
      ? t("tour.requestQuote")
      : `${amounts.length > 1 ? `${t("package.from")} ` : ""}${formatInr(lowest, locale)}`;
  const priceNote = lowest === undefined ? t("tour.pricedAround") : tour.pricing ? priceCaption(tour.pricing, t, locale) : "";

  return (
    <>
      {/* Desktop sticky panel */}
      <div className="sticky top-28 hidden rounded-2xl border border-charcoal-950/10 bg-cream-50 p-6 shadow-sm lg:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{t("tour.price")}</p>
        <p className="font-display mt-1 text-2xl text-charcoal-950">{priceText}</p>
        <p className="mt-1 text-sm text-charcoal-800/60">{priceNote}</p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
          >
            {t("tour.planThisJourney")}
          </button>
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
        <button
          type="button"
          onClick={onOpen}
          className="w-full rounded-full bg-amber-500 py-3 text-center text-xs font-semibold uppercase tracking-wide text-maroon-950"
        >
          {t("tour.planThisJourney")}
        </button>
      </div>
    </>
  );
}
