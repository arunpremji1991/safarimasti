export function SelectPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
        selected
          ? "border-amber-500 bg-amber-500 text-maroon-950"
          : "border-charcoal-950/15 bg-cream-50 text-charcoal-900 hover:border-maroon-700"
      }`}
    >
      {label}
    </button>
  );
}
