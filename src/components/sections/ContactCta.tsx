import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 rounded-3xl bg-maroon-950 p-10 text-cream-50 md:grid-cols-2 md:p-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Let&apos;s Plan Your Next Journey
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center justify-between border-b border-cream-100/20 pb-4 text-lg hover:text-amber-400"
            >
              Call Us <span>{site.phone}</span>
            </a>
            <a
              href={site.emailHref}
              className="flex items-center justify-between border-b border-cream-100/20 pb-4 text-lg hover:text-amber-400"
            >
              Email Us <span>{site.email}</span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between pb-2 text-lg hover:text-amber-400"
            >
              WhatsApp Us <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
