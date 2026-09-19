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
import {
  journeyTypeOptions,
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
          Request Received
        </p>
        <h1 className="font-display mt-4 text-4xl text-charcoal-950">
          Your Journey Request Has Been Received.
        </h1>
        <p className="mt-4 text-lg text-charcoal-800/75">
          Our travel team will review your preferences and get back to you.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
        >
          Back to Safari Masti
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-32">
      {tour && (
        <div className="mb-8 rounded-xl bg-cream-100 px-5 py-3 text-sm text-charcoal-800/80">
          Selected Journey: <span className="font-semibold text-charcoal-950">{tour.title}</span>
        </div>
      )}

      {!isReview && (
        <div className="mb-10 h-1 w-full rounded-full bg-charcoal-950/10">
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
            title="What kind of journey are you looking for?"
            subtitle="Select as many as you like."
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[...experienceTypes.map((e) => e.label), "Other"].map((label) => {
                const img = experienceTypes.find((e) => e.label === label)?.image;
                const selected = form.journeyTypes.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => update("journeyTypes", toggle(form.journeyTypes, label))}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 ${
                      selected ? "border-amber-500" : "border-transparent"
                    }`}
                  >
                    {img && (
                      <Image src={img} alt="" fill sizes="200px" className="object-cover" />
                    )}
                    <div
                      className={`absolute inset-0 ${selected ? "bg-maroon-950/50" : "bg-charcoal-950/40 group-hover:bg-charcoal-950/25"}`}
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-cream-50">
                      {label}
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
            title="Where would you like to go?"
            subtitle="Select one or more regions, or tell us if you already have a destination in mind."
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {regionOptions.map((label) => {
                const img = regionExplorers.find((r) => r.title === label)?.image;
                const selected = form.regions.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => update("regions", toggle(form.regions, label))}
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
                    <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-cream-50">
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <label htmlFor="customDestination" className="block text-sm font-semibold text-charcoal-900">
                I have a destination in mind
              </label>
              <input
                id="customDestination"
                type="text"
                value={form.customDestination}
                onChange={(e) => update("customDestination", e.target.value)}
                placeholder="e.g. Munnar, Ladakh, Varanasi…"
                className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
              />
            </div>
          </StepShell>
        )}

        {step === 3 && (
          <StepShell key={3} step={3} total={TOTAL_STEPS} title="When would you like to travel?">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-semibold text-charcoal-900">
                  Preferred Start Date
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
                  Preferred End Date
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
              My dates are flexible
            </label>

            <p className="mt-6 text-sm font-semibold text-charcoal-900">Approximate duration</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {durationOptions.map((d) => (
                <SelectPill
                  key={d}
                  label={d}
                  selected={form.duration === d}
                  onClick={() => update("duration", d)}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 4 && (
          <StepShell key={4} step={4} total={TOTAL_STEPS} title="Who's traveling?">
            <div className="space-y-3">
              <Counter label="Adults" value={form.adults} onChange={(v) => update("adults", v)} min={1} />
              <Counter
                label="Children"
                value={form.children}
                onChange={(v) => update("children", v)}
              />
              <Counter label="Infants" value={form.infants} onChange={(v) => update("infants", v)} />
            </div>
            {form.children > 0 && (
              <div className="mt-5">
                <label htmlFor="childAges" className="block text-sm font-semibold text-charcoal-900">
                  Child ages
                </label>
                <input
                  id="childAges"
                  type="text"
                  value={form.childAges}
                  onChange={(e) => update("childAges", e.target.value)}
                  placeholder="e.g. 4, 9"
                  className="mt-1.5 w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-2.5 focus:border-maroon-700 focus:outline-none"
                />
              </div>
            )}
          </StepShell>
        )}

        {step === 5 && (
          <StepShell key={5} step={5} total={TOTAL_STEPS} title="What's your travel style?">
            <div className="flex flex-wrap gap-3">
              {travelStyleOptions.map((s) => (
                <SelectPill
                  key={s}
                  label={s}
                  selected={form.travelStyle === s}
                  onClick={() => update("travelStyle", s)}
                />
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold text-charcoal-900">Private journey or group?</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {groupPreferenceOptions.map((g) => (
                <SelectPill
                  key={g}
                  label={g}
                  selected={form.groupPreference === g}
                  onClick={() => update("groupPreference", g)}
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
            title="What are you most interested in?"
            subtitle="Select as many as you like."
          >
            <div className="flex flex-wrap gap-3">
              {interestOptions.map((i) => (
                <SelectPill
                  key={i}
                  label={i}
                  selected={form.interests.includes(i)}
                  onClick={() => update("interests", toggle(form.interests, i))}
                />
              ))}
            </div>
          </StepShell>
        )}

        {step === 7 && (
          <StepShell key={7} step={7} total={TOTAL_STEPS} title="Tell us about your ideal journey">
            <textarea
              rows={6}
              value={form.specialRequirements}
              onChange={(e) => update("specialRequirements", e.target.value)}
              placeholder="Places you'd like to see, experiences you want, preferred pace, special occasions, accommodation preferences, or anything else."
              className="w-full rounded-lg border border-charcoal-950/15 bg-cream-50 px-4 py-3 focus:border-maroon-700 focus:outline-none"
            />
          </StepShell>
        )}

        {step === 8 && (
          <StepShell key={8} step={8} total={TOTAL_STEPS} title="How can we reach you?">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-charcoal-900">
                  Full Name
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
                  Email
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
                    Phone / WhatsApp
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
                    Country (optional)
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

              <p className="text-sm font-semibold text-charcoal-900">Preferred contact method</p>
              <div className="flex flex-wrap gap-3">
                {preferredContactOptions.map((c) => (
                  <SelectPill
                    key={c}
                    label={c}
                    selected={form.preferredContact === c}
                    onClick={() => update("preferredContact", c)}
                  />
                ))}
              </div>
            </div>
          </StepShell>
        )}

        {isReview && (
          <StepShell key={9} step={9} total={9} title="Your Journey">
            <form onSubmit={handleSubmit} className="space-y-6">
              <ReviewRow label="Experience" value={form.journeyTypes.join(", ")} onEdit={() => setStep(1)} />
              <ReviewRow
                label="Destination"
                value={[...form.regions, form.customDestination].filter(Boolean).join(", ")}
                onEdit={() => setStep(2)}
              />
              <ReviewRow
                label="Dates"
                value={`${form.startDate || "—"} to ${form.endDate || "—"}${form.flexibleDates ? " (flexible)" : ""}${form.duration ? ` · ${form.duration}` : ""}`}
                onEdit={() => setStep(3)}
              />
              <ReviewRow
                label="Travellers"
                value={`${form.adults} adults, ${form.children} children, ${form.infants} infants`}
                onEdit={() => setStep(4)}
              />
              <ReviewRow
                label="Travel Style"
                value={[form.travelStyle, form.groupPreference].filter(Boolean).join(" · ")}
                onEdit={() => setStep(5)}
              />
              <ReviewRow label="Interests" value={form.interests.join(", ")} onEdit={() => setStep(6)} />
              <ReviewRow
                label="Special Requirements"
                value={form.specialRequirements || "—"}
                onEdit={() => setStep(7)}
              />
              <ReviewRow
                label="Contact"
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
                  Edit
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting" || !form.fullName || !form.email}
                  className="flex-1 rounded-full bg-amber-500 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send My Journey Request →"}
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
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(TOTAL_STEPS + 1, s + 1))}
            className="rounded-full bg-maroon-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 hover:bg-maroon-800"
          >
            {step === TOTAL_STEPS ? "Review" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

function ReviewRow({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
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
        Edit
      </button>
    </div>
  );
}
