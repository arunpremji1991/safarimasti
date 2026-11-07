"use client";

import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/types";
import { formatInr } from "@/lib/format";
import { priceCaption } from "@/lib/pricing";
import { translateTravelStyle } from "@/i18n/labels";
import { useLanguage } from "@/i18n/LanguageContext";

/** Number of days in a package, read from its duration ("6 Days · 5 Nights" → 6). */
export function packageDays(pkg: Tour): number {
  return parseInt(pkg.duration, 10) || 0;
}

export function PackageCard({ pkg }: { pkg: Tour }) {
  const { t, pick, locale } = useLanguage();
  const amounts = pkg.pricing?.options.map((o) => o.amountInr) ?? [];
  const low = amounts.length ? Math.min(...amounts) : undefined;
  const days = new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en").format(packageDays(pkg));
  const startsIn = pick(pkg.startsIn, pkg.startsInAr);
  const style = pkg.travelStyle[0];

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-charcoal-950/8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-950">
        <Image
          src={pkg.heroImages[0]}
          alt={pick(pkg.title, pkg.titleAr)}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 via-transparent to-transparent" />
        {style && (
          <span className="absolute start-3 top-3 rounded-full bg-charcoal-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream-50 backdrop-blur-sm">
            {translateTravelStyle(style, locale)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-800/65">
          <span className="text-maroon-700">{pick(pkg.destinationGroup ?? pkg.destination, pkg.destinationGroupAr ?? pkg.destinationAr)}</span>
          <span aria-hidden>·</span>
          <span>
            {days} {t("packages.days")}
          </span>
          {startsIn && (
            <>
              <span aria-hidden>·</span>
              <span>
                {t("packages.startsIn")} {startsIn}
              </span>
            </>
          )}
        </p>

        <h3 className="font-display mt-2.5 line-clamp-3 text-lg leading-snug text-charcoal-950 md:text-xl">
          {pick(pkg.title, pkg.titleAr)}
        </h3>
        <p className="mt-1.5 text-sm text-charcoal-800/65">{pick(pkg.duration, pkg.durationAr)}</p>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-charcoal-950/10 pt-4">
          <div className="flex min-h-[4.5rem] min-w-0 flex-col justify-end">
            {low !== undefined ? (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-800/60">
                  {amounts.length > 1 ? t("package.from") : t("tour.price")}
                </p>
                <p className="font-display text-xl leading-tight text-maroon-800">{formatInr(low, locale)}</p>
                <p className="text-xs text-charcoal-800/60">{pkg.pricing ? priceCaption(pkg.pricing, t, locale) : ""}</p>
              </>
            ) : (
              <>
                <p className="font-display text-lg leading-tight text-maroon-800">{t("tour.requestQuote")}</p>
                <p className="text-xs text-charcoal-800/60">{t("package.quoteCaption")}</p>
              </>
            )}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-maroon-700 underline-offset-4 group-hover:underline">
            {t("packages.view")}
            <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
