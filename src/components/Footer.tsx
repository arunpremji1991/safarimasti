"use client";

import Link from "next/link";
import { Logo } from "./ui/Logo";
import { site, navLinks } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { locale, toggleLocale, t, pick } = useLanguage();

  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs font-display text-lg text-cream-200">
              {pick(site.tagline, site.taglineAr)}
            </p>
            <p className="mt-6 max-w-sm text-sm text-cream-100/70">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              {t("footer.explore")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-100/80 hover:text-amber-300">
                    {pick(link.label, link.labelAr)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/build-your-journey" className="text-cream-100/80 hover:text-amber-300">
                  {t("nav.buildYourJourney")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream-100/80 hover:text-amber-300">
                  {t("footer.blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              {t("footer.getInTouch")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="text-cream-100/80 hover:text-amber-300" dir="ltr">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="text-cream-100/80 hover:text-amber-300" dir="ltr">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100/80 hover:text-amber-300"
                >
                  {t("footer.whatsappUs")}
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-amber-400">
              {t("footer.language")}
            </h3>
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={locale === "en" ? "التبديل إلى العربية" : "Switch to English"}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream-100/25 px-4 py-2 text-sm font-semibold text-cream-100 transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              <span aria-hidden>🌐</span>
              {locale === "en" ? t("footer.switchToArabic") : t("footer.switchToEnglish")}
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {pick(site.name, site.nameAr)}.{" "}
            {pick(site.base, site.baseAr)} · {pick(site.scope, site.scopeAr)}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-amber-300">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms" className="hover:text-amber-300">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
