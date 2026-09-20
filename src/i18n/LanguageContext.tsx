"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { ui, UiKey } from "./ui";

export type Locale = "en" | "ar";

const STORAGE_KEY = "safarimasti-locale";

interface LanguageContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Translate a static UI dictionary key. */
  t: (key: UiKey) => string;
  /** Pick between an English value and its Arabic counterpart from data files. */
  pick: <T>(en: T, ar: T | undefined | null) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ar" || stored === "en") {
        setLocaleState(stored);
      }
    } catch {
      // localStorage unavailable — default to English
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  const t = useCallback(
    (key: UiKey) => {
      const entry = ui[key];
      if (!entry) return key;
      return locale === "ar" ? entry.ar : entry.en;
    },
    [locale]
  );

  const pick = useCallback(
    <T,>(en: T, ar: T | undefined | null) => (locale === "ar" && ar != null ? ar : en),
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      dir: (locale === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
      setLocale,
      toggleLocale,
      t,
      pick,
    }),
    [locale, setLocale, toggleLocale, t, pick]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
