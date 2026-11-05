"use client";

import { Reveal } from "@/components/ui/Reveal";
import { whyUs } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function WhyUs() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-white py-24 text-charcoal-950 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            {t("whyUs.eyebrow")}
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-maroon-950 sm:text-5xl">
            {t("whyUs.title")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.08} className="rounded-2xl border border-maroon-950/10 bg-cream-50 p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(81,0,7,0.35)] md:p-10">
              <span className="font-display text-4xl text-amber-600">{item.index}</span>
              <h3 className="font-display mt-4 text-2xl text-maroon-950">{pick(item.title, item.titleAr)}</h3>
              <p className="mt-3 text-charcoal-800/75">{pick(item.description, item.descriptionAr)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
