"use client";

import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/data/types";
import { formatInr } from "@/lib/format";
import { priceCaption } from "@/lib/pricing";
import { useLanguage } from "@/i18n/LanguageContext";

export function PackageCard({ pkg }: { pkg: Tour }) {
  const { t, pick, locale } = useLanguage();
  const amounts = pkg.pricing?.options.map((o) => o.amountInr) ?? [];
  const low = amounts.length ? Math.min(...amounts) : undefined;
  const SHOWN = 3;
  const highlights = pick(pkg.highlights, pkg.highlightsAr) ?? pkg.highlights;
  const shown = highlights.slice(0, SHOWN);

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream-100 ring-1 ring-charcoal-950/5 transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={pkg.heroImages[0]}
          alt={pick(pkg.title, pkg.titleAr)}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/55 via-transparent to-transparent" />
        <span className="absolute start-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon-950">
          {pick(pkg.duration, pkg.durationAr)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
          {pick(pkg.destination, pkg.destinationAr)}
        </span>
        <h3 className="font-display mt-2 text-2xl leading-snug text-charcoal-950 md:text-3xl">
          {pick(pkg.title, pkg.titleAr)}
        </h3>
        <p className="mt-3 line-clamp-3 text-charcoal-800/75">{pick(pkg.shortDescription, pkg.shortDescriptionAr)}</p>

        <ul className="mt-5 space-y-2 text-sm text-charcoal-800/85">
          {shown.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden className="text-amber-600">
                ✦
              </span>
              <span className="line-clamp-2">{h}</span>
            </li>
          ))}
        </ul>

        {highlights.length > SHOWN && (
          <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-maroon-700 underline-offset-4 group-hover:underline">
            {t("package.readMore")}
            <span aria-hidden className="inline-block rtl:rotate-180">
              →
            </span>
          </span>
        )}

        <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-charcoal-950/10 pt-5">
          <div>
            {low !== undefined ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-800/60">
                  {amounts.length > 1 ? t("package.from") : t("tour.price")}
                </p>
                <p className="font-display text-2xl text-maroon-800">{formatInr(low, locale)}</p>
                <p className="text-xs text-charcoal-800/60">{pkg.pricing ? priceCaption(pkg.pricing, t, locale) : ""}</p>
              </>
            ) : (
              <>
                <p className="font-display text-xl text-maroon-800">{t("tour.requestQuote")}</p>
                <p className="text-xs text-charcoal-800/60">{t("package.quoteCaption")}</p>
              </>
            )}
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-maroon-900 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors group-hover:bg-maroon-800">
            {t("package.viewPackage")}
            <span aria-hidden className="inline-block rtl:rotate-180">
              →
            </span>
          </span>
        </div>
        </div>
      </div>
    </Link>
  );
}
