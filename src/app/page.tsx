import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { SignatureCollections } from "@/components/sections/SignatureCollections";
import { DestinationExplorer } from "@/components/sections/DestinationExplorer";
import { ExperienceSelector } from "@/components/sections/ExperienceSelector";
import { BuildJourneyCTA } from "@/components/sections/BuildJourneyCTA";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BrandStatement />
      <Services />
      <WhyUs />
      <SignatureCollections />
      <DestinationExplorer />
      <ExperienceSelector />
      <BuildJourneyCTA />
      <ContactCta />
    </>
  );
}
