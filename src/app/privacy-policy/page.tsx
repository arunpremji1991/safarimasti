import type { Metadata } from "next";
import { PrivacyPolicyBody } from "@/components/PrivacyPolicyBody";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyBody />;
}
