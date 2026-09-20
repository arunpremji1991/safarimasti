import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BlogPageBody } from "@/components/BlogPageBody";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";

export const metadata: Metadata = {
  title: "Blog",
  description: "Travel guides and stories from Safari Masti — Pan-India travel experts based in Cochin, Kerala.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories & Guides"
        eyebrowAr="قصص وأدلة سفر"
        title="The Safari Masti Blog"
        titleAr="مدونة سفاري ماستي"
        description="Travel guides, itineraries and stories from across India."
        descriptionAr="أدلة سفر وبرامج رحلات وقصص من مختلف أنحاء الهند."
        image="/images/collections/divine-trails-hero.webp"
        compact
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Blog", labelAr: "المدونة" },
        ]}
      />

      <BlogPageBody />

      <BuildJourneyCTA />
    </>
  );
}
