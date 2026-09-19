import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";

export function ServicesCompact() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-maroon-700">
            How We Serve You
          </p>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight text-charcoal-950 sm:text-4xl">
            Every trip starts with how you want to travel
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-charcoal-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.05} className="bg-cream-50 p-6">
              <span className="font-display text-2xl text-amber-600">{service.index}</span>
              <h3 className="mt-2 font-semibold text-charcoal-950">{service.title}</h3>
              <p className="mt-2 text-sm text-charcoal-800/70">{service.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-maroon-700"
          >
            See All Experiences <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
