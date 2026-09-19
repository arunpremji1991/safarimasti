import Link from "next/link";

export function DesignedAroundYou({ tourSlug }: { tourSlug: string }) {
  return (
    <div className="rounded-2xl bg-maroon-950 p-8 text-cream-50 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
        Your Journey, Designed Around You
      </p>
      <h3 className="font-display mt-3 text-2xl md:text-3xl">
        A day-by-day itinerary, built once we know your dates
      </h3>
      <p className="mt-3 max-w-xl text-cream-100/80">
        Safari Masti plans the route, pace and stays for every journey around your travel dates,
        group size and travel style — so the exact day-by-day plan is confirmed with you directly,
        not fixed in advance.
      </p>
      <Link
        href={`/build-your-journey?tour=${tourSlug}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-maroon-950 hover:bg-amber-400"
      >
        Build Your Journey <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
