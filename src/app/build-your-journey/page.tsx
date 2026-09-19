import type { Metadata } from "next";
import { Suspense } from "react";
import { JourneyBuilder } from "@/components/journey/JourneyBuilder";

export const metadata: Metadata = {
  title: "Build Your Journey",
  description:
    "Tell Safari Masti how you want to travel and we'll design a Pan-India journey around your dates, budget and travel style.",
};

export default function BuildYourJourneyPage() {
  return (
    <Suspense fallback={null}>
      <JourneyBuilder />
    </Suspense>
  );
}
