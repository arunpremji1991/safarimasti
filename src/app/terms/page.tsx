import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="font-display text-4xl text-charcoal-950">Terms &amp; Conditions</h1>
      <p className="mt-6 text-lg text-charcoal-800/80">
        Safari Masti&apos;s full terms and conditions, including booking, payment and cancellation
        policies, are being finalized. For current terms on any journey, please confirm directly
        with our team at{" "}
        <a href={site.emailHref} className="text-maroon-700 underline">
          {site.email}
        </a>{" "}
        or call {site.phone} before booking.
      </p>
    </div>
  );
}
