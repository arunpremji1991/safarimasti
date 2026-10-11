"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t, pick } = useLanguage();

  return (
    <section id="about" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full">
            <Image
              src="/images/about/about-kerala.webp"
              alt="Chinese fishing nets silhouetted against a golden sunset at Fort Kochi, Kerala"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            {t("about.eyebrow")}
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-charcoal-950 sm:text-5xl">
            {t("about.title")}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
            {t("about.paragraph1")}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal-800/80">
            {t("about.paragraph2")}
          </p>

          <div className="mt-8 border-s-2 border-amber-500 ps-6">
            <p className="font-display text-xl italic text-maroon-800">
              &ldquo;{pick(site.promise, site.promiseAr)}&rdquo;
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-charcoal-800/60">
              {t("about.promiseLabel")}
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-charcoal-950/10 sm:grid-cols-[1fr_1.6fr]">
            <div className="bg-cream-100 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-700">
                {t("about.basedLabel")}
              </dt>
              <dd className="font-display mt-2 text-xl text-charcoal-950">{pick(site.base, site.baseAr)}</dd>
            </div>
            <div className="bg-cream-100 p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-700">
                {t("about.coverageLabel")}
              </dt>
              <dd className="font-display mt-2 text-xl text-charcoal-950">{t("about.coverageValue")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
