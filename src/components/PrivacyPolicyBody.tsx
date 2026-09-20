"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function PrivacyPolicyBody() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="font-display text-4xl text-charcoal-950">{t("privacyPage.title")}</h1>
      <p className="mt-6 text-lg text-charcoal-800/80">
        {t("privacyPage.body1")}{" "}
        <a href={site.emailHref} className="text-maroon-700 underline" dir="ltr">
          {site.email}
        </a>{" "}
        {t("privacyPage.orCall")} <span dir="ltr">{site.phone}</span>.
      </p>
    </div>
  );
}
