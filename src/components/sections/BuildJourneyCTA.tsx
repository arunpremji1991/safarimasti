"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { useLanguage } from "@/i18n/LanguageContext";

export function BuildJourneyCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[75svh] items-center overflow-hidden bg-charcoal-950 py-24 md:py-32">
      <ParallaxImage src="/images/sections/journey-road.webp" />
      <div className="absolute inset-0 bg-charcoal-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-charcoal-950/30" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl leading-tight text-cream-50 sm:text-4xl md:text-6xl">
            {t("buildJourneyCta.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-100/85">{t("buildJourneyCta.subtitle")}</p>
          <div className="mt-10 flex justify-center">
            <Button href="/build-your-journey" variant="primary" arrow>
              {t("nav.buildYourJourney")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
