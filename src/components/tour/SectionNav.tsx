"use client";

import { useEffect, useRef, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

/** Sticky in-page jump bar that highlights the section currently in view. */
export function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active tab visible inside the horizontally scrollable bar.
  useEffect(() => {
    const bar = barRef.current;
    const tab = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (bar && tab) bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-[76px] z-30 -mx-5 mt-8 border-b border-charcoal-950/10 bg-cream-50/90 px-5 backdrop-blur-md md:top-[84px] md:mx-0 md:rounded-2xl md:border md:px-2"
    >
      <div ref={barRef} className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => (
          <a
            key={s.id}
            data-id={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              setActive(s.id);
            }}
            aria-current={active === s.id ? "true" : undefined}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === s.id ? "bg-maroon-800 text-cream-50" : "text-charcoal-800/75 hover:bg-amber-100"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
