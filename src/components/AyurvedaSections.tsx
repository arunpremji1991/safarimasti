"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Tour } from "@/data/types";
import { site } from "@/data/site";
import {
  ayurvedaCopy as copy,
  ayurvedaFaqs,
  ayurvedaGallery,
  ayurvedaIncluded,
  ayurvedaPackageRoutes,
  ayurvedaSteps,
  ayurvedaTherapies,
  ayurvedaTypicalDay,
} from "@/data/ayurveda";
import { useLanguage } from "@/i18n/LanguageContext";

const toArabicDigits = (n: string) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">{children}</p>
  );
}

export function AyurvedaSections({ tours }: { tours: Tour[] }) {
  const { pick, locale } = useLanguage();
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(
    pick(copy.ctaWhatsappMessage.en, copy.ctaWhatsappMessage.ar)
  )}`;

  return (
    <>
      {/* Your journey in two parts */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.planEyebrow.en, copy.planEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.planTitle.en, copy.planTitle.ar)}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.7fr]">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl bg-maroon-950 p-8 text-cream-50">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                  {pick(copy.planPart1Label.en, copy.planPart1Label.ar)}
                </p>
                <p className="font-display mt-6 text-6xl leading-none text-amber-400">
                  {locale === "ar" ? "٧" : "7"}
                  <span className="ms-2 text-xl text-cream-100/80">{pick(copy.planDays.en, copy.planDays.ar)}</span>
                </p>
                <h3 className="font-display mt-5 text-2xl leading-snug">
                  {pick(copy.planPart1Title.en, copy.planPart1Title.ar)}
                </h3>
                <p className="mt-3 text-cream-100/80">{pick(copy.planPart1Body.en, copy.planPart1Body.ar)}</p>
              </div>
            </Reveal>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon-700">
                {pick(copy.planPart2Label.en, copy.planPart2Label.ar)}
              </p>
              <div className="mt-3 grid gap-5 sm:grid-cols-2">
                {ayurvedaPackageRoutes.map((pkg) => {
                  const tour = tours.find((t) => t.slug === pkg.slug);
                  if (!tour) return null;
                  const total = 7 + pkg.tourDays;
                  const fmt = (n: number) => (locale === "ar" ? toArabicDigits(String(n)) : String(n));
                  return (
                    <Reveal key={pkg.slug}>
                      <article className="flex h-full flex-col rounded-3xl bg-cream-50 p-7 ring-1 ring-charcoal-950/10">
                        <p className="font-display text-5xl leading-none text-amber-600">
                          {fmt(pkg.tourDays)}
                          <span className="ms-2 text-lg text-charcoal-800/70">
                            {pick(copy.planDays.en, copy.planDays.ar)} {pick(copy.planTourWord.en, copy.planTourWord.ar)}
                          </span>
                        </p>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-maroon-700">
                          7 + {fmt(pkg.tourDays)} = {fmt(total)} {pick(copy.planTotal.en, copy.planTotal.ar)}
                        </p>
                        <h3 className="font-display mt-4 text-xl leading-snug text-charcoal-950">
                          {pick(tour.title, tour.titleAr)}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-charcoal-800/75">
                          {pick(tour.shortDescription, tour.shortDescriptionAr)}
                        </p>

                        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-charcoal-950/70">
                          {pick(copy.colRoute.en, copy.colRoute.ar)}
                        </p>
                        <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-charcoal-900">
                          {pkg.route.map((stop, i) => (
                            <li key={stop.en} className="flex items-center gap-2">
                              <span className="rounded-full bg-cream-200 px-3 py-1">{pick(stop.en, stop.ar)}</span>
                              {i < pkg.route.length - 1 && (
                                <span aria-hidden className="text-amber-600 rtl:rotate-180">
                                  →
                                </span>
                              )}
                            </li>
                          ))}
                        </ol>

                        <Link
                          href={`/tours/${tour.slug}`}
                          className="group mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold uppercase tracking-widest text-maroon-800 hover:text-maroon-600"
                        >
                          {pick(copy.viewProgramme.en, copy.viewProgramme.ar)}
                          <span
                            aria-hidden
                            className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.therapiesEyebrow.en, copy.therapiesEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.therapiesTitle.en, copy.therapiesTitle.ar)}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-800/75">
              {pick(copy.therapiesIntro.en, copy.therapiesIntro.ar)}
            </p>
          </Reveal>

          <div className="mt-14 space-y-16 md:space-y-24">
            {ayurvedaTherapies.map((therapy, i) => (
              <Reveal key={therapy.id}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div
                    className={`relative aspect-[3/2] w-full overflow-hidden rounded-2xl ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={therapy.image}
                      alt={pick(therapy.alt.en, therapy.alt.ar)}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-maroon-800">
                      {pick(therapy.tag.en, therapy.tag.ar)}
                    </span>
                    <h3 className="font-display mt-4 text-2xl leading-tight text-charcoal-950 sm:text-3xl">
                      {pick(therapy.name.en, therapy.name.ar)}
                    </h3>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
                      {pick(therapy.description.en, therapy.description.ar)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-maroon-950 py-20 text-cream-50 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              {pick(copy.stepsEyebrow.en, copy.stepsEyebrow.ar)}
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl">
              {pick(copy.stepsTitle.en, copy.stepsTitle.ar)}
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-cream-50/10 sm:grid-cols-2 lg:grid-cols-4">
            {ayurvedaSteps.map((step, i) => (
              <li key={step.title.en} className="bg-maroon-950 p-7">
                <span className="font-display text-4xl text-amber-400">
                  {locale === "ar"
                    ? String(i + 1).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)])
                    : String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-xl">{pick(step.title.en, step.title.ar)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/75">
                  {pick(step.description.en, step.description.ar)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* A typical day */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.dayEyebrow.en, copy.dayEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.dayTitle.en, copy.dayTitle.ar)}
            </h2>
          </Reveal>
          <ol className="mt-10 divide-y divide-charcoal-950/10 border-y border-charcoal-950/10">
            {ayurvedaTypicalDay.map((item) => (
              <li key={item.time} className="grid gap-1 py-5 sm:grid-cols-[110px_220px_1fr] sm:items-baseline sm:gap-6">
                <span dir="ltr" className="font-display text-2xl text-amber-600 rtl:text-end">
                  {item.time}
                </span>
                <span className="font-display text-lg text-charcoal-950">{pick(item.title.en, item.title.ar)}</span>
                <span className="text-charcoal-800/75">{pick(item.text.en, item.text.ar)}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-charcoal-800/60">{pick(copy.dayNote.en, copy.dayNote.ar)}</p>
        </div>
      </section>

      {/* Included in every stay */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.includedEyebrow.en, copy.includedEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.includedTitle.en, copy.includedTitle.ar)}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ayurvedaIncluded.map((item, i) => (
              <Reveal key={item.title.en} delay={i * 0.06}>
                <article className="overflow-hidden rounded-2xl bg-cream-100">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={pick(item.alt.en, item.alt.ar)}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-charcoal-950">
                      {pick(item.title.en, item.title.ar)}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-800/75">
                      {pick(item.description.en, item.description.ar)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.galleryEyebrow.en, copy.galleryEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.galleryTitle.en, copy.galleryTitle.ar)}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {ayurvedaGallery.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={pick(img.alt.en, img.alt.ar)}
                    fill
                    sizes="(min-width: 768px) 24vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-charcoal-800/60">
            {pick(copy.galleryNote.en, copy.galleryNote.ar)}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.faqEyebrow.en, copy.faqEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.faqTitle.en, copy.faqTitle.ar)}
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-charcoal-950/10 border-y border-charcoal-950/10">
            {ayurvedaFaqs.map((faq) => (
              <details key={faq.q.en} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-charcoal-950 [&::-webkit-details-marker]:hidden">
                  {pick(faq.q.en, faq.q.ar)}
                  <span
                    aria-hidden
                    className="text-2xl leading-none text-maroon-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-charcoal-800/80">{pick(faq.a.en, faq.a.ar)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-maroon-950 p-10 text-center text-cream-50 md:p-16">
            <h2 className="font-display mx-auto max-w-2xl text-3xl sm:text-4xl">
              {pick(copy.ctaTitle.en, copy.ctaTitle.ar)}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-100/80">
              {pick(copy.ctaBody.en, copy.ctaBody.ar)}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/build-your-journey"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
              >
                {pick(copy.ctaPrimary.en, copy.ctaPrimary.ar)}
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream-100/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-cream-50/10"
              >
                {pick(copy.ctaWhatsapp.en, copy.ctaWhatsapp.ar)}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
