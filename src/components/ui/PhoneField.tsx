"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { phoneCountries } from "@/data/countries";
import { useLanguage } from "@/i18n/LanguageContext";

export interface PhoneValue {
  code: string;
  number: string;
}

export const emptyPhone: PhoneValue = { code: "in", number: "" };

/** "+91 98765 43210", or "" while no number has been typed. */
export function formatPhone(v: PhoneValue): string {
  const number = v.number.trim();
  if (!number) return "";
  const dial = phoneCountries.find((c) => c.code === v.code)?.dial ?? "";
  return `${dial} ${number}`;
}

const inputClass =
  "w-full min-w-0 flex-1 bg-transparent px-3 py-2.5 text-charcoal-950 placeholder:text-charcoal-800/35 focus:outline-none";

export function PhoneField({
  id,
  label,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  value: PhoneValue;
  onChange: (v: PhoneValue) => void;
  required?: boolean;
}) {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const selected = phoneCountries.find((c) => c.code === value.code) ?? phoneCountries[0];

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return phoneCountries;
    return phoneCountries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.nameAr.includes(q) || c.dial.includes(q.replace(/^\+?/, "+"))
    );
  }, [query]);

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal-900">
        {label}
      </label>
      <div className="mt-1.5 flex items-stretch rounded-xl border border-charcoal-950/15 bg-white transition focus-within:border-maroon-700 focus-within:ring-2 focus-within:ring-amber-400/40">
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setOpen((o) => !o);
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`${t("phone.country")}: ${locale === "ar" ? selected.nameAr : selected.name} ${selected.dial}`}
          className="flex shrink-0 items-center gap-2 rounded-s-xl border-e border-charcoal-950/10 px-3 hover:bg-amber-100/50 focus:outline-none focus-visible:bg-amber-100/70"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/flags/${selected.code}.png`} alt="" width={24} height={18} className="h-[18px] w-6 rounded-[3px] object-cover shadow-sm ring-1 ring-black/10" />
          <span dir="ltr" className="text-sm font-semibold tabular-nums text-charcoal-900">
            {selected.dial}
          </span>
          <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 text-charcoal-800/60 transition ${open ? "rotate-180" : ""}`} fill="currentColor" aria-hidden>
            <path d="M5.5 7.5l4.5 5 4.5-5z" />
          </svg>
        </button>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          dir="ltr"
          autoComplete="tel-national"
          required={required}
          pattern="[0-9 \-]{6,15}"
          title={t("phone.hint")}
          placeholder={t("phone.placeholder")}
          value={value.number}
          onChange={(e) => onChange({ ...value, number: e.target.value.replace(/[^0-9 \-]/g, "") })}
          className={inputClass}
        />
      </div>

      {open && (
        <div className="absolute start-0 top-full z-30 mt-2 w-full min-w-[16rem] overflow-hidden rounded-xl border border-charcoal-950/10 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]">
          <div className="border-b border-charcoal-950/10 p-2">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("phone.search")}
              aria-label={t("phone.search")}
              className="w-full rounded-lg bg-cream-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
          <ul role="listbox" className="max-h-60 overflow-y-auto py-1">
            {list.length === 0 && <li className="px-4 py-3 text-sm text-charcoal-800/60">{t("phone.noResults")}</li>}
            {list.map((c) => (
              <li key={c.code} role="option" aria-selected={c.code === value.code}>
                <button
                  type="button"
                  onClick={() => {
                    onChange({ ...value, code: c.code });
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-start text-sm hover:bg-amber-100/60 ${
                    c.code === value.code ? "bg-amber-100/70 font-semibold" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/flags/${c.code}.png`} alt="" width={24} height={18} loading="lazy" className="h-[18px] w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-black/10" />
                  <span className="flex-1 truncate">{locale === "ar" ? c.nameAr : c.name}</span>
                  <span dir="ltr" className="tabular-nums text-charcoal-800/60">
                    {c.dial}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Contact number + WhatsApp number, each with a country selector. Emits hidden `phone` and `whatsapp` inputs. */
export function PhoneFields({ idPrefix, requirePhone }: { idPrefix: string; requirePhone?: boolean }) {
  const { t } = useLanguage();
  const [phone, setPhone] = useState<PhoneValue>(emptyPhone);
  const [whatsapp, setWhatsapp] = useState<PhoneValue>(emptyPhone);
  const [same, setSame] = useState(false);

  const phoneText = formatPhone(phone);
  const whatsappText = same ? phoneText : formatPhone(whatsapp);

  return (
    <div className="space-y-3">
      <PhoneField id={`${idPrefix}-phone`} label={t("phone.contact")} value={phone} onChange={setPhone} required={requirePhone} />
      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-charcoal-800/80">
        <input type="checkbox" checked={same} onChange={(e) => setSame(e.target.checked)} className="h-4 w-4 accent-maroon-700" />
        {t("phone.sameAsContact")}
      </label>
      {!same && <PhoneField id={`${idPrefix}-whatsapp`} label={t("phone.whatsapp")} value={whatsapp} onChange={setWhatsapp} />}
      <input type="hidden" name="phone" value={phoneText} />
      <input type="hidden" name="whatsapp" value={whatsappText} />
    </div>
  );
}
