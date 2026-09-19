import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function BuildJourneyCTA() {
  return (
    <section className="bg-amber-500 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl leading-tight text-maroon-950 sm:text-4xl md:text-5xl">
            Don&apos;t see exactly what you&apos;re looking for?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-maroon-950/80">
            Every Safari Masti journey can be built from scratch around your dates, budget and
            travel style.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/build-your-journey" variant="secondary" arrow>
              Build Your Journey
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
