"use client";

import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactPageBody() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-display text-3xl text-charcoal-950">{t("contactPage.getInTouch")}</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {t("contactPage.address")}
              </p>
              <p className="mt-1 text-charcoal-800/80">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {t("contactPage.call")}
              </p>
              <a
                href={site.phoneHref}
                className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700"
                dir="ltr"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {t("contactPage.email")}
              </p>
              <a
                href={site.emailHref}
                className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700"
                dir="ltr"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                {t("contactPage.whatsapp")}
              </p>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700"
              >
                {t("contactPage.messageOnWhatsapp")}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-cream-100 p-6 md:p-8">
          <h2 className="font-display text-2xl text-charcoal-950">{t("contactPage.sendQuickMessage")}</h2>
          <p className="mt-2 text-sm text-charcoal-800/70">
            {t("contactPage.forFullItinerary")}{" "}
            <a href="/build-your-journey" className="text-maroon-700 underline">
              {t("nav.buildYourJourney")}
            </a>{" "}
            {t("contactPage.instead")}
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
