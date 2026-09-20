import type { Metadata } from "next";
import { TermsBody } from "@/components/TermsBody";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false },
};

export default function TermsPage() {
  return <TermsBody />;
}
