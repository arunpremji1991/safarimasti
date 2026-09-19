import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { ExperienceSelector } from "@/components/sections/ExperienceSelector";
import { SignatureCollections } from "@/components/sections/SignatureCollections";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Adventure, luxury, honeymoon, wildlife, culture, spiritual, family and corporate travel experiences across India, curated by Safari Masti.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Experiences Built Around You"
        description="Every Safari Masti experience starts with how you want to travel — not a fixed package."
        image="/images/collections/adventure-trekking-hero.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
      />
      <Services />
      <ExperienceSelector />
      <SignatureCollections />
      <BuildJourneyCTA />
    </>
  );
}
