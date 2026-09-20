"use client";

import { useState } from "react";

export function GoodToKnow({ items }: { items: { label: string; content: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <div className="divide-y divide-charcoal-950/10 rounded-2xl border border-charcoal-950/10">
      {items.map((item, i) => (
        <div key={item.label}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-start font-semibold text-charcoal-950"
            aria-expanded={openIndex === i}
          >
            {item.label}
            <span aria-hidden>{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="px-6 pb-5 text-charcoal-800/75">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
