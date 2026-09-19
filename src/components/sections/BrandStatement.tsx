import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="bg-maroon-950 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-display text-balance text-4xl leading-[1.1] text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
            From the <span className="text-amber-400 italic">Himalayas</span> to the{" "}
            <span className="text-amber-400 italic">backwaters</span> — your next great journey
            starts here.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-cream-100/70">
            Safari Masti designs journeys around the traveler — not the other way around.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
