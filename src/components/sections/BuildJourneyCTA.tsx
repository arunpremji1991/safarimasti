"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/i18n/LanguageContext";

export function BuildJourneyCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-amber-500 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl leading-tight text-maroon-950 sm:text-4xl md:text-5xl">
            {t("buildJourneyCta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-maroon-950/80">{t("buildJourneyCta.subtitle")}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/build-your-journey" variant="secondary" arrow>
              {t("nav.buildYourJourney")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
