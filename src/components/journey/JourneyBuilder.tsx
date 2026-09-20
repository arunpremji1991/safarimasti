"use client";

import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { StepShell } from "./StepShell";
import { SelectPill } from "./SelectPill";
import { Counter } from "./Counter";
import { experienceTypes } from "@/data/experienceTypes";
import { regionExplorers } from "@/data/destinations";
import { getTourBySlug } from "@/data/tours";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  regionOptions,
  durationOptions,
  travelStyleOptions,
  groupPreferenceOptions,
  interestOptions,
  preferredContactOptions,
} from "@/data/journeyBuilderOptions";

const TOTAL_STEPS = 8;

interface FormState {
  journeyTypes: string[];
  regions: string[];
  customDestination: string;
  startDate: string;
  endDate: string;
  flexibleDates: boolean;
  duration: string;
  adults: number;
  children: number;
  infants: number;
  childAges: string;
  travelStyle: string;
  groupPreference: string;
  interests: string[];
  specialRequirements: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  preferredContact: string;
}

const initialState: FormState = {
  journeyTypes: [],
  regions: [],
  customDestination: "",
  startDate: "",
  endDate: "",
  flexibleDates: false,
  duration: "",
  adults: 2,
  children: 0,
  infants: 0,
  childAges: "",
  travelStyle: "",
  groupPreference: "",
  interests: [],
  specialRequirements: "",
  fullName: "",
  email: "",
  phone: "",
  country: "",
  preferredContact: "",
};

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function JourneyBuilder() {
  const searchParams = useSearchParams();
  const tourSlug = searchParams.get("tour") ?? undefined;
  const tour = tourSlug ? getTourBySlug(tourSlug) : undefined;
  const { t, pick, locale } = useLanguage();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const isReview = step === TOTAL_STEPS + 1;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/journey-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          tourSlug,
          tourTitle: tour?.title,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
          {t("journey.requestReceivedEyebrow")}
        </p>
        <h1 className="font-display mt-4 text-4xl text-charcoal-950">
          {t("journey.requestReceivedTitle")}
        </h1>
        <p className="mt-4 text-lg text-charcoal-800/75">{t("journey.requestReceivedBody")}</p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
        >
          {t("journey.backToHome")}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-32">
      {tour && (
        <div className="mb-8 rounded-xl bg-cream-100 px-5 py-3 text-sm text-charcoal-800/80">
          {t("journey.selectedJourney")}{" "}
          <span className="font-semibold text-charcoal-950">{pick(tour.title, tour.titleAr)}</span>
        </div>
      )}

      {!isReview && (
        <div className="mb-10 flex h-1 w-full rounded-full bg-charcoal-950/10">
          <div
            className="h-1 rounded-full bg-amber-500 transition-all duration-500"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <StepShell
            key={1}
            step={1}
            total={TOTAL_STEPS}
            title={t("journey.step1.title")}
            subtitle={t("journey.step1.subtitle")}
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ...experienceTypes.map((e) => ({ value: e.label, label: pick(e.label, e.labelAr), image: e.image })),
                { value: "Other", label: t("journey.other"), image: undefined },
              ].map((opt) => {
                const selected = form.journeyTypes.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("journeyTypes", toggle(form.journeyTypes, opt.value))}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 ${
                      selected ? "border-amber-500" : "border-transparent"
                    }`}
                  >
                    {opt.image && (
                      <Image src={opt.image} alt="" fill sizes="200px" className="object-cover" />
                    )}
                    <div
                      className={`absolute inset-0 ${selected ? "bg-maroon-950/50" : "bg-charcoal-950/40 group-hover:bg-charcoal-950/25"}`}
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 text-start text-sm font-semibold text-cream-50">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </StepShell>
        )}

        {step === 2 && (
          <StepShell
            key={2}
            step={2}
            total={TOTAL_STEPS}
            title={t("journey.step2.title")}
            subtitle={t("journey.step2.subtitle")}
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {regionOptions.map((opt) => {
                const img = regionExplorers.find((r) => r.title === opt.value)?.image;
                const selected = form.regions.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("regions", toggle(form.regions, opt.value))}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 ${
                      selected ? "border-amber-500" : "border-transparent"
                    }`}
                  >
                    {img ? (
                      <Image src={img} alt="" fill sizes="200px" className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-maroon-900" />
                    )}
                    <div
                      className={`absolute inset-0 ${selected ? "bg-maroon-950/50" : "bg-charcoal-950/40 group-hover:bg-charcoal-950/25"}`}
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 text-start text-sm font-semibold text-cream-50">
                      {pick(opt.en, opt.ar)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <label htmlFor="customDestination" className="block text-sm font-semibold text-charcoal-900">
                {t("journey.step2.customDestinationLabel")}
              </label>
              <input
                id="customDestination"
                type="text"
                value={form.customDestination}
                onChange={(e) => update("customDestination", e.target.value)}
                placeholder={t("journey.step2.customDestinationPlaceholder")}
                className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
              />
            </div>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell key={3} step={3} total={TOTAL_STEPS} title={t("journey.step3.title")}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-charcoal-900">
                  {t("journey.step3.startDate")}
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={(e) => update("startDate", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-semibold text-charcoal-900">
                  {t("journey.step3.endDate")}
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={form.endDate}
                  onChange={(e) => update("endDate", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-charcoal-800/80">
              <input
                type="checkbox"
                checked={form.flexibleDates}
                onChange={(e) => update("flexibleDates", e.target.checked)}
                className="h-4 w-4 rounded border-charcoal-950/30"
              />
              {t("journey.step3.flexibleDates")}
            </label>

            <p className="mt-6 text-sm font-semibold text-charcoal-900">
              {t("journey.step3.approximateDuration")}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              {durationOptions.map((opt) => (
                <SelectPill
                  key={opt.value}
                  label={pick(opt.en, opt.ar)}
                  selected={form.duration === opt.value}
                  onClick={() => update("duration", opt.value)}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell key={4} step={4} total={TOTAL_STEPS} title={t("journey.step4.title")}>
            <div className="space-y-3">
              <Counter
                label={t("journey.step4.adults")}
                value={form.adults}
                onChange={(v) => update("adults", v)}
                min={1}
              />
              <Counter
                label={t("journey.step4.children")}
                value={form.children}
                onChange={(v) => update("children", v)}
              />
              <Counter
                label={t("journey.step4.infants")}
                value={form.infants}
                onChange={(v) => update("infants", v)}
              />
            </div>
            {form.children > 0 && (
              <div className="mt-5">
                <label htmlFor="childAges" className="block text-sm font-semibold text-charcoal-900">
                  {t("journey.step4.childAges")}
                </label>
                <input
                  id="childAges"
                  type="text"
                  value={form.childAges}
                  onChange={(e) => update("childAges", e.target.value)}
                  placeholder={t("journey.step4.childAgesPlaceholder")}
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
            )}
          </StepShell>
        )}

        {step === 5 && (
          <StepShell key={5} step={5} total={TOTAL_STEPS} title={t("journey.step5.title")}>
            <div className="flex flex-wrap gap-3">
              {travelStyleOptions.map((opt) => (
                <SelectPill
                  key={opt.value}
                  label={pick(opt.en, opt.ar)}
                  selected={form.travelStyle === opt.value}
                  onClick={() => update("travelStyle", opt.value)}
                />
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-charcoal-900">
              {t("journey.step5.groupQuestion")}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              {groupPreferenceOptions.map((opt) => (
                <SelectPill
                  key={opt.value}
                  label={pick(opt.en, opt.ar)}
                  selected={form.groupPreference === opt.value}
                  onClick={() => update("groupPreference", opt.value)}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 6 && (
          <StepShell
            key={6}
            step={6}
            total={TOTAL_STEPS}
            title={t("journey.step6.title")}
            subtitle={t("journey.step6.subtitle")}
          >
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((opt) => (
                <SelectPill
                  key={opt.value}
                  label={pick(opt.en, opt.ar)}
                  selected={form.interests.includes(opt.value)}
                  onClick={() => update("interests", toggle(form.interests, opt.value))}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 7 && (
          <StepShell key={7} step={7} total={TOTAL_STEPS} title={t("journey.step7.title")}>
            <textarea
              rows={6}
              value={form.specialRequirements}
              onChange={(e) => update("specialRequirements", e.target.value)}
              placeholder={t("journey.step7.placeholder")}
              className="w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-3 focus:border-maroon-700 focus:outline-none"
            />
          </StepShell>
        )}

        {step === 8 && (
          <StepShell key={8} step={8} total={TOTAL_STEPS} title={t("journey.step8.title")}>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal-900">
                  {t("journey.step8.fullName")}
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900">
                  {t("journey.step8.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-900">
                    {t("journey.step8.phone")}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-charcoal-900">
                    {t("journey.step8.country")}
                  </label>
                  <input
                    id="country"
                    type="text"
                    value={form.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                  />
                </div>
              </div>

              <p className="text-sm font-semibold text-charcoal-900">
                {t("journey.step8.preferredContact")}
              </p>
              <div className="flex flex-wrap gap-3">
                {preferredContactOptions.map((opt) => (
                  <SelectPill
                    key={opt.value}
                    label={pick(opt.en, opt.ar)}
                    selected={form.preferredContact === opt.value}
                    onClick={() => update("preferredContact", opt.value)}
                  />
                ))}
              </div>
            </div>
          </StepShell>
        )}

        {isReview && (
          <StepShell key={9} step={9} total={9} title={t("journey.review.title")}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <ReviewRow
                label={t("journey.review.experience")}
                value={form.journeyTypes
                  .map((v) => {
                    const et = experienceTypes.find((e) => e.label === v);
                    return et ? pick(et.label, et.labelAr) : v === "Other" ? t("journey.other") : v;
                  })
                  .join(locale === "ar" ? "، " : ", ")}
                onEdit={() => setStep(1)}
              />
              <ReviewRow
                label={t("journey.review.destination")}
                value={[
                  ...form.regions.map((v) => {
                    const opt = regionOptions.find((r) => r.value === v);
                    return opt ? pick(opt.en, opt.ar) : v;
                  }),
                  form.customDestination,
                ]
                  .filter(Boolean)
                  .join(locale === "ar" ? "، " : ", ")}
                onEdit={() => setStep(2)}
              />
              <ReviewRow
                label={t("journey.review.dates")}
                value={`${form.startDate || "—"} ${t("journey.review.to")} ${form.endDate || "—"}${
                  form.flexibleDates ? ` ${t("journey.review.flexible")}` : ""
                }${
                  form.duration
                    ? ` · ${pick(
                        durationOptions.find((d) => d.value === form.duration)?.en ?? form.duration,
                        durationOptions.find((d) => d.value === form.duration)?.ar
                      )}`
                    : ""
                }`}
                onEdit={() => setStep(3)}
              />
              <ReviewRow
                label={t("journey.review.travellers")}
                value={`${form.adults} ${t("journey.review.adultsLabel")}, ${form.children} ${t("journey.review.childrenLabel")}, ${form.infants} ${t("journey.review.infantsLabel")}`}
                onEdit={() => setStep(4)}
              />
              <ReviewRow
                label={t("journey.review.travelStyle")}
                value={[
                  pick(
                    travelStyleOptions.find((s) => s.value === form.travelStyle)?.en ?? "",
                    travelStyleOptions.find((s) => s.value === form.travelStyle)?.ar
                  ),
                  pick(
                    groupPreferenceOptions.find((g) => g.value === form.groupPreference)?.en ?? "",
                    groupPreferenceOptions.find((g) => g.value === form.groupPreference)?.ar
                  ),
                ]
                  .filter(Boolean)
                  .join(" · ")}
                onEdit={() => setStep(5)}
              />
              <ReviewRow
                label={t("journey.review.interests")}
                value={form.interests
                  .map((v) => {
                    const opt = interestOptions.find((i) => i.value === v);
                    return opt ? pick(opt.en, opt.ar) : v;
                  })
                  .join(locale === "ar" ? "، " : ", ")}
                onEdit={() => setStep(6)}
              />
              <ReviewRow
                label={t("journey.review.specialRequirements")}
                value={form.specialRequirements || "—"}
                onEdit={() => setStep(7)}
              />
              <ReviewRow
                label={t("journey.review.contact")}
                value={`${form.fullName} · ${form.email}${form.phone ? ` · ${form.phone}` : ""}`}
                onEdit={() => setStep(8)}
              />

              {status === "error" && <p className="text-sm text-red-700">{errorMessage}</p>}

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(8)}
                  className="rounded-full border border-charcoal-950/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal-900"
                >
                  {t("journey.edit")}
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting" || !form.fullName || !form.email}
                  className="flex-1 rounded-full bg-amber-500 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400 disabled:opacity-60"
                >
                  {status === "submitting" ? t("journey.sending") : t("journey.sendRequest")}
                </button>
              </div>
            </form>
          </StepShell>
        )}
      </AnimatePresence>

      {!isReview && (
        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="rounded-full border border-charcoal-950/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal-900 disabled:opacity-30"
          >
            {t("journey.back")}
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(TOTAL_STEPS + 1, s + 1))}
            className="rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 hover:bg-maroon-800"
          >
            {step === TOTAL_STEPS ? t("journey.review") : t("journey.next")}
          </button>
        </div>
      )}
    </div>
  );
}

function ReviewRow({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-start justify-between gap-4 border-b border-charcoal-950/10 pb-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">{label}</p>
        <p className="mt-1 text-charcoal-900">{value || "—"}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 text-sm font-semibold text-maroon-700 underline"
      >
        {t("journey.edit")}
      </button>
    </div>
  );
}
