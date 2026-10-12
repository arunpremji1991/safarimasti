"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Tour } from "@/data/types";
import { site } from "@/data/site";
import { honeymoonChapters, honeymoonCopy as copy, honeymoonGallery } from "@/data/honeymoon";
import { useLanguage } from "@/i18n/LanguageContext";

const toArabicDigits = (n: string) => n.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

export function HoneymoonSections({ tours }: { tours: Tour[] }) {
  const { pick, locale } = useLanguage();
  const bySlug = new Map(tours.map((t) => [t.slug, t]));
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(
    pick(copy.ctaWhatsappMessage.en, copy.ctaWhatsappMessage.ar)
  )}`;

  // The same three honest highlights apply to every escape; show them once, as what each is built around.
  const sharedHighlights = bySlug.get("kerala-backwater-retreats");

  return (
    <>
      {/* Four escapes */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
              {pick(copy.chaptersEyebrow.en, copy.chaptersEyebrow.ar)}
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.chaptersTitle.en, copy.chaptersTitle.ar)}
            </h2>
          </Reveal>

          <div className="mt-14 space-y-16 md:space-y-24">
            {honeymoonChapters.map((chapter, i) => {
              const tour = bySlug.get(chapter.slug);
              if (!tour) return null;
              const n = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={chapter.slug}>
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl ${
                        i % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={chapter.image}
                        alt={pick(chapter.alt.en, chapter.alt.ar)}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
                    </Link>
                    <div className={i % 2 === 1 ? "md:order-1" : ""}>
                      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-maroon-700">
                        <span className="font-display text-3xl tracking-normal text-amber-600">
                          {locale === "ar" ? toArabicDigits(n) : n}
                        </span>
                        {pick(copy.chapter.en, copy.chapter.ar)} · {pick(chapter.place.en, chapter.place.ar)}
                      </p>
                      <h3 className="font-display mt-4 text-3xl leading-tight text-charcoal-950 sm:text-4xl">
                        {pick(tour.title, tour.titleAr)}
                      </h3>
                      <p className="font-display mt-4 text-xl italic leading-snug text-maroon-800">
                        {pick(chapter.mood.en, chapter.mood.ar)}
                      </p>
                      <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
                        {pick(tour.shortDescription, tour.shortDescriptionAr)}
                      </p>
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-maroon-800"
                      >
                        {pick(copy.viewEscape.en, copy.viewEscape.ar)}
                        <span
                          aria-hidden
                          className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-bleed band */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-charcoal-950">
        <ParallaxImage
          src="/images/honeymoon/jetty-wide.webp"
          alt={pick(
            "A honeymoon couple on a wooden jetty over the Kerala backwaters at sunrise",
            "زوجان في شهر العسل على رصيف خشبي فوق مياه كيرالا الراكدة عند الشروق"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-charcoal-950/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              {pick(copy.bandEyebrow.en, copy.bandEyebrow.ar)}
            </p>
            <p className="font-display mt-4 max-w-3xl text-balance text-3xl leading-tight text-cream-50 sm:text-4xl md:text-6xl">
              {pick(copy.bandTitle.en, copy.bandTitle.ar)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Designed for two */}
      {sharedHighlights && (
        <section className="bg-maroon-950 py-20 text-cream-50 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                {pick(copy.forTwoEyebrow.en, copy.forTwoEyebrow.ar)}
              </p>
              <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl">
                {pick(copy.forTwoTitle.en, copy.forTwoTitle.ar)}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-cream-50/10 md:grid-cols-3">
              {sharedHighlights.highlights.map((h, i) => (
                <li key={h} className="bg-maroon-950 p-7">
                  <span className="font-display text-4xl text-amber-400">
                    {locale === "ar" ? toArabicDigits(`0${i + 1}`) : `0${i + 1}`}
                  </span>
                  <p className="font-display mt-4 text-xl leading-snug">
                    {pick(h, sharedHighlights.highlightsAr?.[i] ?? h)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
              {pick(copy.galleryEyebrow.en, copy.galleryEyebrow.ar)}
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.galleryTitle.en, copy.galleryTitle.ar)}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {honeymoonGallery.map((img, i) => (
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
          <p className="mt-4 text-xs text-charcoal-800/60">{pick(copy.galleryNote.en, copy.galleryNote.ar)}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-maroon-950 p-10 text-center text-cream-50 md:p-16">
            <h2 className="font-display mx-auto max-w-2xl text-3xl sm:text-4xl">
              {pick(copy.ctaTitle.en, copy.ctaTitle.ar)}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream-100/80">{pick(copy.ctaBody.en, copy.ctaBody.ar)}</p>
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
