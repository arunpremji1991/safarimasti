import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Safari Masti — Cochin, Kerala based travel management company for Pan-India journeys.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Plan Your Next Journey"
        title="Contact Safari Masti"
        image="/images/collections/divine-trails-hero.webp"
        compact
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-3xl text-charcoal-950">Get in Touch</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                  Address
                </p>
                <p className="mt-1 text-charcoal-800/80">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                  Call
                </p>
                <a href={site.phoneHref} className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                  Email
                </p>
                <a href={site.emailHref} className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon-700">
                  WhatsApp
                </p>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg text-charcoal-950 hover:text-maroon-700"
                >
                  Message us on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-cream-100 p-6 md:p-8">
            <h2 className="font-display text-2xl text-charcoal-950">Send a Quick Message</h2>
            <p className="mt-2 text-sm text-charcoal-800/70">
              For a full custom itinerary, use{" "}
              <a href="/build-your-journey" className="text-maroon-700 underline">
                Build Your Journey
              </a>{" "}
              instead.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
