"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/types";
import { site } from "@/data/site";
import { formatInr } from "@/lib/format";
import { priceCaption } from "@/lib/pricing";
import { useLanguage } from "@/i18n/LanguageContext";
import { Stepper } from "@/components/tour/Stepper";
import type { BookingPrefill } from "@/components/tour/BookingModal";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-charcoal-950/15 bg-white px-3 py-2 text-sm text-charcoal-950 transition focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-amber-400/40";

export function BookingPanel({
  tour,
  related,
  basePath,
  onOpen,
}: {
  tour: Tour;
  related: Tour[];
  basePath: "/tours" | "/packages";
  onOpen: (prefill: BookingPrefill) => void;
}) {
  const { t, pick, locale } = useLanguage();
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [from, setFrom] = useState("");
  const [today, setToday] = useState("");
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const amounts = tour.pricing?.options.map((o) => o.amountInr) ?? [];
  const lowest = amounts.length ? Math.min(...amounts) : undefined;
  const priceText =
    lowest === undefined
      ? t("tour.requestQuote")
      : `${amounts.length > 1 ? `${t("package.from")} ` : ""}${formatInr(lowest, locale)}`;
  const priceNote = lowest === undefined ? t("tour.pricedAround") : tour.pricing ? priceCaption(tour.pricing, t, locale) : "";

  const open = () => onOpen({ travelDate: date, adults, children: kids, departureCity: from.trim() });

  return (
    <>
      {/* Desktop plan card: pinned while scrolling; the related trips below scroll away beneath it */}
      <div className="hidden rounded-2xl border border-charcoal-950/10 bg-cream-50 p-6 shadow-sm lg:sticky lg:top-28 lg:z-10 lg:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{t("tour.price")}</p>
        <p className="font-display mt-1 text-2xl text-charcoal-950">{priceText}</p>
        <p className="mt-1 text-sm text-charcoal-800/60">{priceNote}</p>

        <form
          className="mt-4 space-y-3.5 border-t border-charcoal-950/10 pt-4"
          onSubmit={(e) => {
            e.preventDefault();
            open();
          }}
        >
          <div>
            <label htmlFor="panel-date" className="block text-xs font-semibold text-charcoal-900">
              {t("booking.travelDate")}
            </label>
            <input
              id="panel-date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Stepper compact label={t("booking.adults")} value={adults} min={1} max={30} onChange={setAdults} />
            <Stepper compact label={t("booking.children")} value={kids} min={0} max={20} onChange={setKids} />
          </div>
          <div>
            <label htmlFor="panel-from" className="block text-xs font-semibold text-charcoal-900">
              {t("booking.departure")}
            </label>
            <input
              id="panel-from"
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              autoComplete="address-level2"
              className={fieldClass}
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
          >
            {t("tour.planThisJourney")}
          </button>
        </form>

        <div className="mt-4 space-y-1.5 border-t border-charcoal-950/10 pt-4 text-sm text-charcoal-800/70">
          <a href={site.phoneHref} className="block hover:text-maroon-700">
            {t("tour.callPrefix")} <span dir="ltr">{site.phone}</span>
          </a>
          <a href={site.emailHref} className="block hover:text-maroon-700" dir="ltr">
            {site.email}
          </a>
        </div>
      </div>

      {/* Related trips: large image cards, name only */}
      {related.length > 0 && (
        <div className="mt-10 lg:mt-6">
          <h2 className="font-display text-2xl text-charcoal-950">{t("tour.youMayAlsoLike")}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {related.slice(0, 3).map((r) => (
              <li key={r.slug}>
                <Link
                  href={`${basePath}/${r.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-charcoal-950 shadow-sm ring-1 ring-charcoal-950/5 sm:aspect-[4/5] lg:aspect-[16/10]"
                >
                  <Image
                    src={r.heroImages[0]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/25 to-transparent"
                  />
                  <span className="font-display absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-xl leading-snug text-cream-50">
                    <span className="line-clamp-3">{pick(r.title, r.titleAr)}</span>
                    <span
                      aria-hidden
                      className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm text-maroon-950 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-charcoal-950/10 bg-cream-50 p-4 lg:hidden">
        <button
          type="button"
          onClick={open}
          className="w-full rounded-full bg-amber-500 py-3 text-center text-xs font-semibold uppercase tracking-wide text-maroon-950"
        >
          {t("tour.planThisJourney")}
        </button>
      </div>
    </>
  );
}
