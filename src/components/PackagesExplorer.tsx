"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Tour, TravelStyle } from "@/data/types";
import { PackageCard, packageDays } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { translateTravelStyle } from "@/i18n/labels";
import { UiKey } from "@/i18n/ui";
import { useLanguage } from "@/i18n/LanguageContext";

type GroupKey = "duration" | "price" | "destination" | "style";
type Selected = Record<GroupKey, string[]>;
type SortKey = "recommended" | "shortest" | "longest" | "priceLow";

const GROUPS: GroupKey[] = ["duration", "price", "destination", "style"];
const GROUP_LABEL: Record<GroupKey, UiKey> = {
  duration: "packages.filter.duration",
  price: "packages.filter.price",
  destination: "packages.filter.destination",
  style: "packages.filter.style",
};
const STYLE_ORDER: TravelStyle[] = ["Budget Friendly", "Comfort", "Premium", "Luxury"];
const EMPTY: Selected = { duration: [], price: [], destination: [], style: [] };

const durationBucket = (p: Tour) => {
  const d = packageDays(p);
  return d <= 5 ? "short" : d <= 7 ? "mid" : "long";
};
const priceKey = (p: Tour) => (p.pricing ? "published" : "quote");
const destinationKey = (p: Tour) => p.destinationGroup ?? p.destination;
const lowestAmount = (p: Tour) => (p.pricing ? Math.min(...p.pricing.options.map((o) => o.amountInr)) : Infinity);

/** Does the package pass every group's selection? `skip` leaves one group out, to count that group's options. */
function matches(p: Tour, sel: Selected, skip?: GroupKey) {
  const ok = (g: GroupKey, test: (values: string[]) => boolean) => g === skip || sel[g].length === 0 || test(sel[g]);
  return (
    ok("duration", (v) => v.includes(durationBucket(p))) &&
    ok("price", (v) => v.includes(priceKey(p))) &&
    ok("destination", (v) => v.includes(destinationKey(p))) &&
    ok("style", (v) => p.travelStyle.some((s) => v.includes(s)))
  );
}

interface Option {
  value: string;
  label: string;
  count: number;
}

function OptionList({
  group,
  options,
  selected,
  onToggle,
}: {
  group: GroupKey;
  options: Option[];
  selected: string[];
  onToggle: (group: GroupKey, value: string) => void;
}) {
  return (
    <ul className="space-y-1">
      {options.map((o) => {
        const on = selected.includes(o.value);
        const disabled = o.count === 0 && !on;
        return (
          <li key={o.value}>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-[15px] transition hover:bg-cream-100 ${
                disabled ? "cursor-not-allowed opacity-45 hover:bg-transparent" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={on}
                disabled={disabled}
                onChange={() => onToggle(group, o.value)}
                className="h-4 w-4 shrink-0 accent-maroon-700"
              />
              <span className="flex-1 text-charcoal-900">{o.label}</span>
              <span className="text-xs text-charcoal-800/55">{o.count}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

const chipClass =
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";

export function PackagesExplorer({ packages }: { packages: Tour[] }) {
  const { t, pick, locale } = useLanguage();
  const [selected, setSelected] = useState<Selected>(EMPTY);
  const [sort, setSort] = useState<SortKey>("recommended");
  const [openGroup, setOpenGroup] = useState<GroupKey | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const fmt = (n: number) => new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en").format(n);
  const countWord = (n: number) => (n === 1 ? t("packages.one") : t("packages.many"));

  // Options for each group, with how many packages each would give given the other groups' selections.
  const options = useMemo<Record<GroupKey, Option[]>>(() => {
    const count = (g: GroupKey, test: (p: Tour) => boolean) => packages.filter((p) => matches(p, selected, g) && test(p)).length;
    const destinations: { value: string; label: string }[] = [];
    packages.forEach((p) => {
      const value = destinationKey(p);
      if (!destinations.some((d) => d.value === value)) destinations.push({ value, label: pick(value, p.destinationGroupAr ?? p.destinationAr) });
    });
    const styles = STYLE_ORDER.filter((s) => packages.some((p) => p.travelStyle.includes(s)));
    return {
      duration: (["short", "mid", "long"] as const).map((v) => ({
        value: v,
        label: t(`packages.duration.${v}` as UiKey),
        count: count("duration", (p) => durationBucket(p) === v),
      })),
      price: (["published", "quote"] as const).map((v) => ({
        value: v,
        label: t(`packages.price.${v}` as UiKey),
        count: count("price", (p) => priceKey(p) === v),
      })),
      destination: destinations.map((d) => ({ ...d, count: count("destination", (p) => destinationKey(p) === d.value) })),
      style: styles.map((s) => ({
        value: s,
        label: translateTravelStyle(s, locale),
        count: count("style", (p) => p.travelStyle.includes(s)),
      })),
    };
  }, [packages, selected, locale, pick, t]);

  const visible = useMemo(() => {
    const list = packages.filter((p) => matches(p, selected));
    if (sort === "shortest") return [...list].sort((a, b) => packageDays(a) - packageDays(b));
    if (sort === "longest") return [...list].sort((a, b) => packageDays(b) - packageDays(a));
    if (sort === "priceLow") return [...list].sort((a, b) => lowestAmount(a) - lowestAmount(b));
    return list;
  }, [packages, selected, sort]);

  const activeCount = GROUPS.reduce((n, g) => n + selected[g].length, 0);

  const toggle = (group: GroupKey, value: string) =>
    setSelected((s) => ({ ...s, [group]: s[group].includes(value) ? s[group].filter((v) => v !== value) : [...s[group], value] }));
  const clearAll = () => setSelected(EMPTY);

  // Close a chip's dropdown on an outside click or Escape.
  useEffect(() => {
    if (!openGroup) return;
    const onDown = (e: MouseEvent) => {
      if (!barRef.current?.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenGroup(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup]);

  // The "All filters" dialog locks page scroll and closes on Escape.
  useEffect(() => {
    if (!modalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    modalCloseRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  const optionLabel = (g: GroupKey, value: string) => options[g].find((o) => o.value === value)?.label ?? value;

  return (
    <>
      {/* Filter bar */}
      <div ref={barRef} className="relative flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`${chipClass} border-charcoal-950 bg-charcoal-950 text-cream-50 hover:bg-charcoal-900`}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {t("packages.filters")}
          {activeCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-bold text-maroon-950">
              {fmt(activeCount)}
            </span>
          )}
        </button>

        {GROUPS.map((g) => {
          const n = selected[g].length;
          const open = openGroup === g;
          return (
            <div key={g} className="sm:relative">
              <button
                type="button"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setOpenGroup(open ? null : g)}
                className={`${chipClass} ${
                  n > 0 ? "border-maroon-700 bg-amber-100/70 text-maroon-900" : "border-charcoal-950/15 bg-white text-charcoal-900 hover:border-charcoal-950/40"
                }`}
              >
                {t(GROUP_LABEL[g])}
                {n > 0 && <span className="text-xs font-bold">{fmt(n)}</span>}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {open && (
                <div className="absolute inset-x-0 top-full z-30 mt-2 rounded-2xl sm:inset-x-auto sm:start-0 sm:w-64 border border-charcoal-950/10 bg-white p-3 shadow-xl">
                  <OptionList group={g} options={options[g]} selected={selected[g]} onToggle={toggle} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sort + count */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <label className="inline-flex items-center gap-2 rounded-full border border-charcoal-950/15 bg-white px-4 py-2 text-sm text-charcoal-800/70">
          {t("packages.sort")}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="cursor-pointer bg-transparent font-semibold text-charcoal-950 focus:outline-none"
          >
            <option value="recommended">{t("packages.sort.recommended")}</option>
            <option value="shortest">{t("packages.sort.shortest")}</option>
            <option value="longest">{t("packages.sort.longest")}</option>
            <option value="priceLow">{t("packages.sort.priceLow")}</option>
          </select>
        </label>
      </div>

      <h2 className="mt-8 flex flex-wrap items-baseline gap-x-3 font-display text-2xl text-charcoal-950 md:text-3xl" aria-live="polite">
        {t("packages.all")}
        <span className="font-sans text-base font-normal text-charcoal-800/60">
          {t("packages.show")} {fmt(visible.length)} {countWord(visible.length)}
        </span>
      </h2>

      {/* Active filters */}
      {activeCount > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {GROUPS.flatMap((g) =>
            selected[g].map((v) => (
              <button
                key={`${g}-${v}`}
                type="button"
                onClick={() => toggle(g, v)}
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm text-maroon-900 transition hover:bg-amber-200"
              >
                {optionLabel(g, v)}
                <span aria-hidden>×</span>
                <span className="sr-only">{t("packages.remove")}</span>
              </button>
            ))
          )}
          <button type="button" onClick={clearAll} className="ms-1 text-sm font-semibold text-maroon-700 underline-offset-4 hover:underline">
            {t("packages.clearAll")}
          </button>
        </div>
      )}

      {/* Grid */}
      {visible.length > 0 ? (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((pkg) => (
            <li key={pkg.slug}>
              <PackageCard pkg={pkg} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-3xl bg-cream-100 p-10 text-center">
          <p className="font-display text-2xl text-charcoal-950">{t("packages.empty.title")}</p>
          <p className="mx-auto mt-3 max-w-md text-charcoal-800/75">{t("packages.empty.body")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={clearAll}
              className="rounded-full border border-charcoal-950/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal-900 hover:bg-white"
            >
              {t("packages.clearAll")}
            </button>
            <Button href="/build-your-journey" variant="primary" arrow>
              {t("nav.buildYourJourney")}
            </Button>
          </div>
        </div>
      )}

      {/* All filters dialog */}
      {modalOpen && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4">
          <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} aria-hidden />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("packages.allFilters")}
            className="relative flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-cream-50 shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-center justify-between border-b border-charcoal-950/10 px-6 py-4">
              <h2 className="font-display text-2xl text-charcoal-950">{t("packages.allFilters")}</h2>
              <button
                ref={modalCloseRef}
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label={t("packages.close")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-950/15 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto px-6 py-5">
              {GROUPS.map((g) => (
                <fieldset key={g}>
                  <legend className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{t(GROUP_LABEL[g])}</legend>
                  <div className="mt-2">
                    <OptionList group={g} options={options[g]} selected={selected[g]} onToggle={toggle} />
                  </div>
                </fieldset>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-charcoal-950/10 bg-white px-6 py-4">
              <button
                type="button"
                onClick={clearAll}
                disabled={activeCount === 0}
                className="text-sm font-semibold text-maroon-700 underline-offset-4 hover:underline disabled:opacity-40 disabled:hover:no-underline"
              >
                {t("packages.clearAll")}
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
              >
                {t("packages.show")} {fmt(visible.length)} {countWord(visible.length)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
