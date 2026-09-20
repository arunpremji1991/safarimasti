import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactPageBody } from "@/components/ContactPageBody";

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
        eyebrowAr="لنخطط معًا لرحلتكم القادمة"
        title="Contact Safari Masti"
        titleAr="تواصل مع سفاري ماستي"
        image="/images/collections/divine-trails-hero.webp"
        compact
        crumbs={[
          { label: "Home", labelAr: "الرئيسية", href: "/" },
          { label: "Contact", labelAr: "تواصل معنا" },
        ]}
      />

      <ContactPageBody />
    </>
  );
}
