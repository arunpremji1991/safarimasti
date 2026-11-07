"use client";

export function Stepper({
  label,
  value,
  min,
  max,
  onChange,
  compact,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  compact?: boolean;
}) {
  const btn = `flex ${compact ? "h-7 w-7 text-base" : "h-9 w-9 text-lg"} shrink-0 items-center justify-center rounded-full border border-charcoal-950/15 leading-none text-charcoal-900 transition hover:bg-amber-100 disabled:opacity-30`;
  return (
    <div>
      <span className={`block font-semibold text-charcoal-900 ${compact ? "text-xs" : "text-sm"}`}>{label}</span>
      <div
        className={`mt-1.5 flex items-center justify-between rounded-xl border border-charcoal-950/15 bg-white ${
          compact ? "px-2 py-1" : "px-3 py-1.5"
        }`}
      >
        <button type="button" className={btn} disabled={value <= min} onClick={() => onChange(value - 1)} aria-label="−">
          −
        </button>
        <span className="min-w-6 text-center font-semibold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button type="button" className={btn} disabled={value >= max} onClick={() => onChange(value + 1)} aria-label="+">
          +
        </button>
      </div>
    </div>
  );
}
