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
      <div className="lg:sticky lg:top-28 lg:max-h-[calc(100svh-8rem)] lg:overflow-y-auto lg:overscroll-contain">
        {/* Desktop plan card */}
        <div className="hidden rounded-2xl border border-charcoal-950/10 bg-cream-50 p-6 shadow-sm lg:block">
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

        {/* Related trips: thumbnail and name only */}
        {related.length > 0 && (
          <div className="mt-8 lg:mt-5 lg:rounded-2xl lg:border lg:border-charcoal-950/10 lg:bg-white lg:p-5">
            <h2 className="font-display text-xl text-charcoal-950 lg:text-lg">{t("tour.youMayAlsoLike")}</h2>
            <ul className="mt-3 space-y-2">
              {related.slice(0, 3).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`${basePath}/${r.slug}`}
                    className="group flex items-center gap-3 rounded-xl p-1.5 transition-colors hover:bg-cream-100"
                  >
                    <span className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={r.heroImages[0]}
                        alt=""
                        fill
                        sizes="72px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0 text-sm font-semibold leading-snug text-charcoal-950 group-hover:text-maroon-800">
                      {pick(r.title, r.titleAr)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
