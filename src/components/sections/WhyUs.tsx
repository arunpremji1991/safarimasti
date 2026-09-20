"use client";

import { Reveal } from "@/components/ui/Reveal";
import { whyUs } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function WhyUs() {
  const { t, pick } = useLanguage();

  return (
    <section className="bg-charcoal-950 py-24 text-cream-50 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            {t("whyUs.eyebrow")}
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
            {t("whyUs.title")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-cream-50/10 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.08} className="bg-charcoal-900 p-8 md:p-10">
              <span className="font-display text-4xl text-amber-400">{item.index}</span>
              <h3 className="font-display mt-4 text-2xl">{pick(item.title, item.titleAr)}</h3>
              <p className="mt-3 text-cream-100/70">{pick(item.description, item.descriptionAr)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
