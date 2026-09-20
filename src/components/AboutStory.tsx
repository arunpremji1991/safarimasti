"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutStory() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            {t("about.storyEyebrow")}
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-charcoal-950 sm:text-4xl">
            {pick(site.base, site.baseAr)} · {pick(site.scope, site.scopeAr)}
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
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/images/about/about-kerala.webp"
            alt="A silhouetted boatman on Kerala's backwaters at dusk"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
