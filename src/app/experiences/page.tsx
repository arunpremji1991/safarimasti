import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
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
        eyebrowAr="ما نقدمه"
        title="Experiences Built Around You"
        titleAr="تجارب مصمَّمة خصيصًا من أجلكم"
        description="Every Safari Masti experience starts with how you want to travel — not a fixed package."
        descriptionAr="كل تجربة مع سفاري ماستي تبدأ من الطريقة التي تريدون السفر بها، لا من باقة جاهزة مسبقًا."
        image="/images/collections/adventure-trekking-hero.webp"
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Experiences", labelAr: "التجارب" },
        ]}
      />
      <ExperienceSelector />
      <SignatureCollections />
      <BuildJourneyCTA />
    </>
  );
}
