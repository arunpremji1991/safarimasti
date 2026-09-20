import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutStory } from "@/components/AboutStory";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServicesCompact } from "@/components/sections/ServicesCompact";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Safari Masti is a premier travel management company based in Cochin, Kerala, specializing in curated Pan-India travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        eyebrowAr="من نحن"
        title="About Safari Masti"
        titleAr="عن سفاري ماستي"
        description="Cochin-based, Pan-India in reach — a team of local experts designing journeys around every traveler."
        descriptionAr="مقرّنا في كوتشي، ونصل إلى جميع أنحاء الهند — فريق من الخبراء المحليين يصمم كل رحلة حول المسافر نفسه."
        image="/images/collections/jewels-of-the-south-hero.webp"
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "About", labelAr: "من نحن" },
        ]}
      />

      <AboutStory />
      <ServicesCompact />
      <WhyUs />
      <BuildJourneyCTA />
    </>
  );
}
