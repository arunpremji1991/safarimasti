"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Logo } from "./ui/Logo";
import { navLinks } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

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

  const solid = scrolled || menuOpen || !hasHeroBackground;

  return (
    <>
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-cream-50/95 shadow-sm backdrop-blur" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" aria-label={t("nav.homeAriaLabel")} className="shrink-0">
          <Logo variant={solid ? "dark" : "light"} />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "text-sm font-semibold uppercase tracking-wide transition-colors",
                  solid ? "text-charcoal-900 hover:text-maroon-700" : "text-cream-50 hover:text-amber-300"
                )}
              >
                {pick(link.label, link.labelAr)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/build-your-journey"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-maroon-950 transition-colors hover:bg-amber-400"
          >
            {t("nav.buildYourJourney")} <span aria-hidden className="inline-block rtl:rotate-180">→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          className={clsx(
            "z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden",
            solid ? "text-charcoal-900" : "text-cream-50"
          )}
        >
          <span
            className={clsx(
              "block h-0.5 w-6 bg-current transition-transform",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span className={clsx("block h-0.5 w-6 bg-current transition-opacity", menuOpen && "opacity-0")} />
          <span
            className={clsx(
              "block h-0.5 w-6 bg-current transition-transform",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>
    </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-maroon-950 px-8 py-24 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-cream-50 hover:text-amber-400"
                  >
                    {pick(link.label, link.labelAr)}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/build-your-journey"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950"
              >
                {t("nav.buildYourJourney")} <span aria-hidden className="inline-block rtl:rotate-180">→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
