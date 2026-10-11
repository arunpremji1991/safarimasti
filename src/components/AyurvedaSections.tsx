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
  ayurvedaSteps,
  ayurvedaTherapies,
} from "@/data/ayurveda";
import { useLanguage } from "@/i18n/LanguageContext";

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
      {/* Therapies */}
      <section className="bg-cream-100 py-20 md:py-28">
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

      {/* Compare programmes */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Eyebrow>{pick(copy.compareEyebrow.en, copy.compareEyebrow.ar)}</Eyebrow>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight text-charcoal-950 sm:text-4xl md:text-5xl">
              {pick(copy.compareTitle.en, copy.compareTitle.ar)}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tours.map((tour) => (
              <Reveal key={tour.slug}>
                <article className="flex h-full flex-col rounded-2xl bg-cream-50 p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                    {pick(tour.duration, tour.durationAr)}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-charcoal-950">
                    {pick(tour.title, tour.titleAr)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-800/75">
                    {pick(tour.shortDescription, tour.shortDescriptionAr)}
                  </p>

                  <dl className="mt-5 space-y-4 border-t border-charcoal-950/10 pt-5 text-sm">
                    <div>
                      <dt className="font-semibold text-charcoal-950">
                        {pick(copy.colBestFor.en, copy.colBestFor.ar)}
                      </dt>
                      <dd className="mt-1 text-charcoal-800/75">
                        {(locale === "ar" && tour.bestForAr ? tour.bestForAr : tour.bestFor).join(
                          locale === "ar" ? "، " : ", "
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-charcoal-950">
                        {pick(copy.colTherapies.en, copy.colTherapies.ar)}
                      </dt>
                      <dd className="mt-1 text-charcoal-800/75">
                        {(locale === "ar" && tour.highlightsAr ? tour.highlightsAr : tour.highlights).join(
                          locale === "ar" ? "، " : ", "
                        )}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-widest text-maroon-800 hover:text-maroon-600"
                  >
                    {pick(copy.viewProgramme.en, copy.viewProgramme.ar)}
                    <span aria-hidden className="inline-block transition-transform rtl:rotate-180 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
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
