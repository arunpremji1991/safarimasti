"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { TourGallery } from "@/components/tour/TourGallery";
import { BookingPanel } from "@/components/tour/BookingPanel";
import { BookingModal } from "@/components/tour/BookingModal";
import { ThankYouModal } from "@/components/ui/ThankYouModal";
import { DesignedAroundYou } from "@/components/tour/DesignedAroundYou";
import { GoodToKnow } from "@/components/tour/GoodToKnow";
import { SectionNav, NavSection } from "@/components/tour/SectionNav";
import { ReadMore } from "@/components/tour/ReadMore";
import { ItineraryAccordion } from "@/components/tour/ItineraryAccordion";
import { InclusionsTabs } from "@/components/tour/InclusionsTabs";
import { TourCard } from "@/components/ui/TourCard";
import { PackageCard } from "@/components/ui/PackageCard";
import { formatInr } from "@/lib/format";
import { priceCaption } from "@/lib/pricing";
import { Collection, Tour } from "@/data/types";
import { useLanguage } from "@/i18n/LanguageContext";
import { translateCategory, translateTravelStyle } from "@/i18n/labels";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span aria-hidden className="h-7 w-1 rounded-full bg-amber-500" />
      <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">{children}</h2>
    </div>
  );
}

export function TourPageContent({
  tour,
  collection,
  related,
  kind = "tour",
}: {
  tour: Tour;
  collection: Collection | undefined;
  related: Tour[];
  kind?: "tour" | "package";
}) {
  const { t, pick, locale } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [thanksName, setThanksName] = useState<string | null>(null);
  const hasItinerary = tour.itinerary.length > 0;
  const hasInclusions = tour.inclusions.length > 0 || tour.exclusions.length > 0;
  const isPackage = kind === "package";
  const amounts = tour.pricing?.options.map((o) => o.amountInr) ?? [];
  const lowest = amounts.length ? Math.min(...amounts) : undefined;
  const priceLabel =
    lowest === undefined
      ? t("tour.requestQuote")
      : `${amounts.length > 1 ? `${t("package.from")} ` : ""}${formatInr(lowest, locale)}`;

  const sections: NavSection[] = [
    { id: "overview", label: t("tour.nav.overview") },
    ...(tour.highlights.length > 0 ? [{ id: "highlights", label: t("tour.nav.highlights") }] : []),
    { id: "itinerary", label: t("tour.nav.itinerary") },
    ...(tour.pricing ? [{ id: "price", label: t("tour.nav.price") }] : []),
    ...(tour.hotels && tour.hotels.length > 0 ? [{ id: "hotels", label: t("tour.nav.hotels") }] : []),
    ...(hasInclusions ? [{ id: "included", label: t("tour.nav.included") }] : []),
    ...(tour.goodToKnow.length > 0 ? [{ id: "good-to-know", label: t("tour.nav.goodToKnow") }] : []),
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-32">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-charcoal-800/60">
          <Link href="/" className="hover:text-maroon-700">
            {t("tour.home")}
          </Link>
          <span>/</span>
          {isPackage ? (
            <Link href="/packages" className="hover:text-maroon-700">
              {t("nav.packages")}
            </Link>
          ) : (
            <Link href="/collections" className="hover:text-maroon-700">
              {t("tour.collections")}
            </Link>
          )}
          {collection && (
            <>
              <span>/</span>
              <Link href={`/collections/${collection.slug}`} className="hover:text-maroon-700">
                {pick(collection.title, collection.titleAr)}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-maroon-700">{pick(tour.title, tour.titleAr)}</span>
        </nav>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <TourGallery images={tour.heroImages} title={pick(tour.title, tour.titleAr)} />

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {pick(tour.destination, tour.destinationAr)}
              </p>
              <h1 className="font-display mt-2 text-4xl leading-tight text-charcoal-950 sm:text-5xl">
                {pick(tour.title, tour.titleAr)}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {tour.category.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-cream-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal-900"
                  >
                    {translateCategory(c, locale)}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-cream-100 p-6 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">
                  {t("tour.duration")}
                </p>
                <p className="mt-1 font-semibold text-charcoal-950">
                  {pick(tour.duration, tour.durationAr)}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">
                  {t("tour.travelStyle")}
                </p>
                <p className="mt-1 font-semibold text-charcoal-950">
                  {tour.travelStyle.map((s) => translateTravelStyle(s, locale)).join("، ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">
                  {t("tour.bestFor")}
                </p>
                <p className="mt-1 font-semibold text-charcoal-950">
                  {(pick(tour.bestFor, tour.bestForAr) ?? tour.bestFor).join("، ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-charcoal-800/60">{t("tour.price")}</p>
                <p className="mt-1 font-semibold text-charcoal-950">{priceLabel}</p>
              </div>
            </div>

            <SectionNav sections={sections} />

            {/* Overview */}
            <section id="overview" className="mt-10 scroll-mt-40">
              <SectionTitle>{t("tour.aboutJourney")}</SectionTitle>
              <ReadMore text={pick(tour.overview, tour.overviewAr)} className="max-w-3xl text-lg leading-relaxed text-charcoal-800/80" />
            </section>

            {/* Highlights */}
            {tour.highlights.length > 0 && (
              <section id="highlights" className="mt-14 scroll-mt-40">
                <SectionTitle>{t("tour.whatMakesSpecial")}</SectionTitle>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {(pick(tour.highlights, tour.highlightsAr) ?? tour.highlights).map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-charcoal-950/8 bg-white p-4 text-[15px] leading-snug text-charcoal-800/90 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs text-amber-600" aria-hidden>
                        ✦
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary or designed-around-you CTA */}
            <section id="itinerary" className="mt-14 scroll-mt-40">
              <SectionTitle>{t("tour.yourJourney")}</SectionTitle>
              {hasItinerary ? <ItineraryAccordion stops={tour.itinerary} /> : <DesignedAroundYou tourSlug={tour.slug} />}
            </section>

            {/* Package cost */}
            {tour.pricing && (
              <section id="price" className="mt-14 scroll-mt-40">
                <SectionTitle>{t("package.costTitle")}</SectionTitle>
                <div className="grid gap-4 sm:grid-cols-2">
                  {tour.pricing.options.map((o) => (
                    <div key={o.label} className="flex flex-col rounded-2xl border border-charcoal-950/10 bg-cream-100 p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{pick(o.label, o.labelAr)}</p>
                      <p className="font-display mt-2 text-3xl text-charcoal-950">
                        {formatInr(o.amountInr, locale)}
                        {tour.pricing?.perPerson && (
                          <span className="ms-2 font-sans text-sm text-charcoal-800/60">/ {t("package.perPerson")}</span>
                        )}
                      </p>
                      {o.detail && <p className="mt-2 text-sm text-charcoal-800/75">{pick(o.detail, o.detailAr)}</p>}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-charcoal-800/70">
                  {priceCaption(tour.pricing, t, locale)}.{" "}
                  {tour.pricing.note ? pick(tour.pricing.note, tour.pricing.noteAr) : t("package.bookingNote")}
                </p>
              </section>
            )}

            {/* Hotels */}
            {tour.hotels && tour.hotels.length > 0 && (
              <section id="hotels" className="mt-14 scroll-mt-40">
                <SectionTitle>{t("package.hotelsTitle")}</SectionTitle>
                <ul className="divide-y divide-charcoal-950/10 overflow-hidden rounded-2xl border border-charcoal-950/10 bg-white">
                  {tour.hotels.map((h) => (
                    <li key={h.place} className="grid gap-1 p-5 sm:grid-cols-[150px_1fr_auto] sm:items-baseline sm:gap-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{pick(h.place, h.placeAr)}</span>
                      <span className="font-display text-lg text-charcoal-950" dir="ltr">
                        {h.name}
                      </span>
                      <span className="text-sm text-charcoal-800/70">{pick(h.nights, h.nightsAr)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-charcoal-800/60">{t("package.hotelsNote")}</p>
              </section>
            )}

            {/* Inclusions / Exclusions */}
            {hasInclusions && (
              <section id="included" className="mt-14 scroll-mt-40">
                <InclusionsTabs
                  inclusions={pick(tour.inclusions, tour.inclusionsAr) ?? tour.inclusions}
                  exclusions={pick(tour.exclusions, tour.exclusionsAr) ?? tour.exclusions}
                />
              </section>
            )}

            {/* Good to know */}
            {tour.goodToKnow.length > 0 && (
              <section id="good-to-know" className="mt-14 scroll-mt-40">
                <SectionTitle>{t("tour.goodToKnow")}</SectionTitle>
                <GoodToKnow items={tour.goodToKnow} />
              </section>
            )}
          </div>

          <aside>
            <BookingPanel tour={tour} onOpen={() => setBookingOpen(true)} />
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-2xl text-charcoal-950 sm:text-3xl">
              {t("tour.youMayAlsoLike")}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) =>
                isPackage ? <PackageCard key={r.slug} pkg={r} /> : <TourCard key={r.slug} tour={r} />
              )}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mt-24 rounded-3xl bg-maroon-950 p-10 text-center text-cream-50 md:p-16">
          <h2 className="font-display text-3xl sm:text-4xl">{t("tour.finalCtaTitle")}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
            >
              {t("tour.planThisJourney")}
            </button>
            <Link
              href="/build-your-journey"
              className="rounded-full border border-cream-100/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-cream-50/10"
            >
              {t("tour.buildYourOwnJourney")}
            </Link>
          </div>
        </section>
      </div>

      {/* spacer for mobile sticky bar */}
      <div className="h-20 lg:hidden" />

      <AnimatePresence>
        {bookingOpen && (
          <BookingModal
            key="booking"
            tour={tour}
            onClose={() => setBookingOpen(false)}
            onSent={(name) => {
              setBookingOpen(false);
              setThanksName(name);
            }}
          />
        )}
      </AnimatePresence>
      <ThankYouModal
        open={thanksName !== null}
        onClose={() => setThanksName(null)}
        name={thanksName ?? ""}
        eyebrow={t("booking.bookEyebrow")}
        body={t("booking.thanksBody")}
      />
    </>
  );
}
