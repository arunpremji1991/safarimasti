import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32 md:px-8">
      <h1 className="font-display text-4xl text-charcoal-950">Privacy Policy</h1>
      <p className="mt-6 text-lg text-charcoal-800/80">
        Safari Masti&apos;s full privacy policy is being finalized. In the meantime, for any
        questions about how your information is collected or used when you contact us or submit a
        journey request, please write to us at{" "}
        <a href={site.emailHref} className="text-maroon-700 underline">
          {site.email}
        </a>{" "}
        or call {site.phone}.
      </p>
    </div>
  );
}
