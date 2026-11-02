"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Tour } from "@/data/types";
import { formatInr } from "@/lib/format";
import { useLanguage } from "@/i18n/LanguageContext";
import { UiKey } from "@/i18n/ui";
import { PhoneFields } from "@/components/ui/PhoneField";

export type BookingMode = "book" | "customize";

const CHANGE_OPTIONS: { value: string; key: UiKey }[] = [
  { value: "Travel dates", key: "booking.change.dates" },
  { value: "Hotels", key: "booking.change.hotels" },
  { value: "Duration", key: "booking.change.duration" },
  { value: "Destinations", key: "booking.change.destinations" },
  { value: "Activities", key: "booking.change.activities" },
  { value: "Budget", key: "booking.change.budget" },
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-charcoal-950/15 bg-white px-4 py-2.5 text-charcoal-950 transition focus:border-maroon-700 focus:outline-none focus:ring-2 focus:ring-amber-400/40";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal-900">
        {label}
      </label>
      {children}
    </div>
  );
}

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  const btn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-950/15 text-lg leading-none text-charcoal-900 transition hover:bg-amber-100 disabled:opacity-30";
  return (
    <div>
      <span className="block text-sm font-semibold text-charcoal-900">{label}</span>
      <div className="mt-1.5 flex items-center justify-between rounded-xl border border-charcoal-950/15 bg-white px-3 py-1.5">
        <button type="button" className={btn} disabled={value <= min} onClick={() => onChange(value - 1)} aria-label="−">
          −
        </button>
        <span className="min-w-8 text-center font-semibold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button type="button" className={btn} disabled={value >= max} onClick={() => onChange(value + 1)} aria-label="+">
          +
        </button>
      </div>
    </div>
  );
}

export function BookingModal({
  tour,
  mode,
  onClose,
  onSent,
}: {
  tour: Tour;
  mode: BookingMode;
  onClose: () => void;
  onSent: (name: string) => void;
}) {
  const { t, pick, locale } = useLanguage();
  const reduce = useReducedMotion();
  const firstRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [changes, setChanges] = useState<string[]>([]);
  const options = tour.pricing?.options ?? [];
  const [optionIdx, setOptionIdx] = useState(0);
  const isCustomize = mode === "customize";
  const title = pick(tour.title, tour.titleAr);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => firstRef.current?.focus(), 350);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("submitting");
    setError("");

    const chosen = options[optionIdx];
    try {
      const res = await fetch("/api/booking-request.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          tourTitle: tour.title,
          pageUrl: window.location.href,
          packageOption: chosen ? `${chosen.label} — ${formatInr(chosen.amountInr, "en")}` : "",
          name: data.name,
          email: data.email,
          phone: data.phone,
          whatsapp: data.whatsapp,
          travelDate: data.travelDate,
          adults,
          children,
          departureCity: data.departureCity,
          changes,
          notes: data.notes,
          company: data.company,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || t("booking.genericError"));
      }
      onSent(String(data.name ?? ""));
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t("booking.genericError"));
    }
  }

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-md" onClick={onClose} aria-hidden />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative flex max-h-[94svh] w-full max-w-xl flex-col overflow-hidden rounded-t-[28px] bg-cream-50 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:max-h-[90svh] sm:rounded-[28px]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.96 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        {/* Header */}
        <div className="relative shrink-0 bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 px-6 pb-5 pt-6 text-cream-50 sm:px-8">
          <div aria-hidden className="pointer-events-none absolute -top-16 end-10 h-40 w-40 rounded-full bg-amber-500/25 blur-3xl" />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("thanks.close")}
            className="absolute end-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/25 bg-charcoal-950/30 transition hover:rotate-90 hover:bg-cream-50/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
            {isCustomize ? t("booking.customizeEyebrow") : t("booking.bookEyebrow")}
          </p>
          <h2 id="booking-title" className="font-display mt-2 pe-10 text-2xl leading-tight sm:text-3xl">
            {isCustomize ? t("booking.customizeTitle") : t("booking.bookTitle")}
          </h2>
          <p className="mt-2 text-sm text-cream-100/85">
            <span className="text-amber-300">{title}</span>
            {" · "}
            {pick(tour.duration, tour.durationAr)}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          {options.length > 0 && (
            <fieldset>
              <legend className="text-sm font-semibold text-charcoal-900">{t("booking.chooseOption")}</legend>
              <div className="mt-2 space-y-2">
                {options.map((o, i) => (
                  <label
                    key={o.label}
                    className={`flex cursor-pointer flex-wrap items-start gap-x-3 gap-y-1 rounded-xl border p-3.5 transition ${
                      optionIdx === i
                        ? "border-maroon-700 bg-amber-100/60 ring-1 ring-maroon-700"
                        : "border-charcoal-950/15 bg-white hover:border-maroon-700/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="packageOption"
                      checked={optionIdx === i}
                      onChange={() => setOptionIdx(i)}
                      className="mt-1 accent-maroon-700"
                    />
                    <span className="min-w-0 flex-1 basis-40">
                      <span className="block text-sm font-semibold text-charcoal-950">{pick(o.label, o.labelAr)}</span>
                      {o.detail && (
                        <span className="mt-0.5 block text-xs text-charcoal-800/70">{pick(o.detail, o.detailAr)}</span>
                      )}
                    </span>
                    <span className="font-display ms-auto shrink-0 text-base text-maroon-800">{formatInr(o.amountInr, locale)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <Field id="bk-name" label={t("contactForm.name")}>
            <input ref={firstRef} id="bk-name" name="name" type="text" required autoComplete="name" className={inputClass} />
          </Field>
          <Field id="bk-email" label={t("contactForm.email")}>
            <input id="bk-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </Field>
          <PhoneFields idPrefix="bk" requirePhone />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="bk-date" label={t("booking.travelDate")}>
              <input id="bk-date" name="travelDate" type="date" min={today} className={inputClass} />
            </Field>
            <Field id="bk-from" label={t("booking.departure")}>
              <input id="bk-from" name="departureCity" type="text" autoComplete="address-level2" className={inputClass} />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stepper label={t("booking.adults")} value={adults} min={1} max={30} onChange={setAdults} />
            <Stepper label={t("booking.children")} value={children} min={0} max={20} onChange={setChildren} />
          </div>

          {isCustomize && (
            <fieldset>
              <legend className="text-sm font-semibold text-charcoal-900">{t("booking.changeWhat")}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {CHANGE_OPTIONS.map((c) => {
                  const on = changes.includes(c.value);
                  return (
                    <button
                      key={c.value}
                      type="button"
                      aria-pressed={on}
                      onClick={() =>
                        setChanges((list) => (on ? list.filter((v) => v !== c.value) : [...list, c.value]))
                      }
                      className={`rounded-full border px-4 py-1.5 text-sm transition ${
                        on
                          ? "border-maroon-700 bg-maroon-800 text-cream-50"
                          : "border-charcoal-950/20 bg-white text-charcoal-900 hover:border-maroon-700/60"
                      }`}
                    >
                      {t(c.key)}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          <Field id="bk-notes" label={isCustomize ? t("booking.customizeNotes") : t("booking.notes")}>
            <textarea
              id="bk-notes"
              name="notes"
              rows={3}
              required={isCustomize}
              className={inputClass}
              placeholder={isCustomize ? t("booking.customizePlaceholder") : undefined}
            />
          </Field>

          {status === "error" && <p className="text-sm text-red-700">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-amber-500 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-maroon-950 shadow-[0_10px_30px_-10px_rgba(238,170,76,0.9)] transition hover:bg-amber-400 disabled:opacity-60"
            >
              {status === "submitting"
                ? t("contactForm.sending")
                : isCustomize
                  ? t("booking.sendCustomize")
                  : t("booking.sendBook")}
            </button>
            <p className="mt-3 text-center text-xs text-charcoal-800/65">{t("booking.noPayment")}</p>
          </div>
        </form>
      </motion.div>
    </motion.div>,
    document.body
  );
}
