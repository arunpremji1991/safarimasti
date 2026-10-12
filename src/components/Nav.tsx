"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import clsx from "clsx";
import { Logo } from "./ui/Logo";
import { navLinks, site } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

const AYURVEDA_HREF = "/collections/kerala-ayurveda";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 19c0-7.5 4.5-13 14-14 .5 9.5-5 14-12.5 14M5 19c2.5-4.5 5.5-7.5 9-9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The featured Ayurveda call-out: deep green pill, amber leaf, live dot and a slow light sweep. */
function AyurvedaPill({
  active,
  label,
  compact,
}: {
  active: boolean;
  label: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={AYURVEDA_HREF}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full",
        "bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-emerald-50",
        "ring-1 ring-amber-300/50 shadow-[0_6px_22px_-6px_rgba(16,185,129,0.65)]",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(16,185,129,0.85)]",
        compact ? "px-3 py-2" : "px-4 py-2.5",
        active && "ring-2 ring-amber-300"
      )}
    >
      <span
        aria-hidden
        className="nav-sheen pointer-events-none absolute inset-y-0 start-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <LeafIcon className="relative h-[18px] w-[18px] text-amber-300 transition-transform duration-300 group-hover:rotate-12" />
      <span
        className={clsx(
          "relative font-bold uppercase",
          compact ? "text-[11.5px] tracking-[0.12em] sm:text-[12.5px] sm:tracking-[0.14em]" : "text-[12.5px] tracking-[0.14em]"
        )}
      >
        {label}
      </span>
      <span aria-hidden className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, pick } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Only pages that render a full-bleed dark hero image immediately below the
  // nav can safely use the transparent/light-logo state at the top of the
  // page — everywhere else (tour pages, the journey builder, plain pages)
  // starts on a light background, so the nav must stay solid from the start.
  const transparentCapableRoutes = ["/", "/about", "/experiences", "/destinations", "/collections", "/contact", "/blog"];
  const hasHeroBackground =
    transparentCapableRoutes.includes(pathname) || pathname.startsWith("/collections/");

  const solid = (scrolled || !hasHeroBackground) && !menuOpen;

  const ayurvedaActive = pathname.startsWith(AYURVEDA_HREF);
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/collections") return pathname.startsWith("/collections") && !ayurvedaActive;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const ayurvedaLink = navLinks.find((l) => l.href === AYURVEDA_HREF)!;
  const mainLinks = navLinks.filter((l) => l.href !== AYURVEDA_HREF);
  // On desktop the logo is the Home link, which keeps the bar uncluttered.
  const desktopLinks = mainLinks.filter((l) => l.href !== "/");

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
        <nav
          className={clsx(
            "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2 ps-5 transition-all duration-300 md:px-4 md:ps-6",
            solid
              ? "bg-cream-50/90 shadow-[0_10px_40px_-12px_rgba(57,10,16,0.25)] ring-1 ring-charcoal-950/5 backdrop-blur-xl"
              : "bg-charcoal-950/25 ring-1 ring-white/15 backdrop-blur-md"
          )}
        >
          <Link href="/" aria-label={t("nav.homeAriaLabel")} className="shrink-0">
            <Logo variant={solid ? "dark" : "light"} />
          </Link>

          <LayoutGroup id="nav">
            <ul className="hidden items-center gap-0.5 xl:flex">
              {desktopLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "relative block rounded-full px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] transition-colors",
                        solid
                          ? active
                            ? "text-maroon-800"
                            : "text-charcoal-900/80 hover:text-maroon-700"
                          : active
                            ? "text-amber-300"
                            : "text-cream-50/90 hover:text-white"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className={clsx(
                            "absolute inset-0 -z-10 rounded-full",
                            solid ? "bg-maroon-900/[0.07]" : "bg-white/15"
                          )}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {pick(link.label, link.labelAr)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>

          <div className="flex items-center gap-2 md:gap-3">
            <AyurvedaPill
              active={ayurvedaActive}
              label={pick(ayurvedaLink.label, ayurvedaLink.labelAr)}
              compact
            />

            <Link
              href="/build-your-journey"
              className="hidden items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-maroon-950 shadow-[0_6px_20px_-8px_rgba(238,170,76,0.9)] transition-all hover:-translate-y-0.5 hover:bg-amber-400 xl:inline-flex"
            >
              {t("nav.buildYourJourney")}
              <span aria-hidden className="inline-block rtl:rotate-180">
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              className={clsx(
                "relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition-colors xl:hidden",
                menuOpen
                  ? "text-cream-50 hover:bg-white/10"
                  : solid
                    ? "text-charcoal-900 hover:bg-charcoal-950/5"
                    : "text-cream-50 hover:bg-white/10"
              )}
            >
              <span
                className={clsx(
                  "block h-[1.5px] w-5 bg-current transition-transform duration-300",
                  menuOpen && "translate-y-[6.5px] rotate-45"
                )}
              />
              <span
                className={clsx("block h-[1.5px] w-5 bg-current transition-opacity", menuOpen && "opacity-0")}
              />
              <span
                className={clsx(
                  "block h-[1.5px] w-5 bg-current transition-transform duration-300",
                  menuOpen && "-translate-y-[6.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[45] flex flex-col overflow-y-auto bg-maroon-950 px-6 pb-10 pt-28 xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
            >
              <Link
                href={AYURVEDA_HREF}
                className="group relative block aspect-[16/8] w-full overflow-hidden rounded-2xl ring-1 ring-amber-300/40"
              >
                <Image
                  src="/images/ayurveda/pavilion.1fc4c569.webp"
                  alt=""
                  fill
                  sizes="(min-width: 640px) 560px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                      <LeafIcon className="h-3.5 w-3.5" />
                      {t("ayurveda.eyebrow")}
                    </p>
                    <p className="font-display mt-1 text-2xl leading-tight text-cream-50">
                      {pick(ayurvedaLink.label, ayurvedaLink.labelAr)}
                    </p>
                    <p className="text-xs text-cream-100/80">{t("nav.ayurvedaTagline")}</p>
                  </div>
                  <span
                    aria-hidden
                    className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-maroon-950 rtl:rotate-180"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>

            <ul className="mt-8 flex flex-col">
              {mainLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + 0.04 * i, duration: 0.4 }}
                    className="border-b border-cream-100/10"
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "flex items-baseline gap-4 py-4 font-display text-3xl transition-colors",
                        active ? "text-amber-400" : "text-cream-50 hover:text-amber-300"
                      )}
                    >
                      <span className="w-6 text-xs font-sans font-semibold tracking-widest text-amber-400/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {pick(link.label, link.labelAr)}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 space-y-4"
            >
              <Link
                href="/build-your-journey"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-maroon-950"
              >
                {t("nav.buildYourJourney")}
                <span aria-hidden className="inline-block rtl:rotate-180">
                  →
                </span>
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center rounded-full border border-cream-100/25 px-4 py-3 text-sm font-semibold text-cream-50 hover:bg-white/10"
                >
                  {t("nav.call")}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-cream-100/25 px-4 py-3 text-sm font-semibold text-cream-50 hover:bg-white/10"
                >
                  {t("nav.whatsapp")}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
