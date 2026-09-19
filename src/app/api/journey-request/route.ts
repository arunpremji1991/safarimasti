import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEnquiryEmail } from "@/lib/mailer";

const schema = z.object({
  tourSlug: z.string().max(200).optional(),
  tourTitle: z.string().max(200).optional(),
  journeyTypes: z.array(z.string()).max(20).default([]),
  regions: z.array(z.string()).max(20).default([]),
  customDestination: z.string().max(500).optional(),
  startDate: z.string().max(20).optional(),
  endDate: z.string().max(20).optional(),
  flexibleDates: z.boolean().default(false),
  duration: z.string().max(50).optional(),
  adults: z.number().int().min(0).max(50).default(1),
  children: z.number().int().min(0).max(50).default(0),
  infants: z.number().int().min(0).max(50).default(0),
  childAges: z.string().max(200).optional(),
  travelStyle: z.string().max(50).optional(),
  groupPreference: z.string().max(50).optional(),
  interests: z.array(z.string()).max(30).default([]),
  specialRequirements: z.string().max(4000).optional(),
  fullName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional(),
  country: z.string().max(100).optional(),
  preferredContact: z.string().max(50).optional(),
  company: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
  }

  const d = parsed.data;

  const lines = [
    `New Custom Journey Request — Safari Masti`,
    ``,
    `Submitted: ${new Date().toISOString()}`,
    d.tourTitle ? `Selected Journey: ${d.tourTitle}` : null,
    ``,
    `--- Traveler ---`,
    `Name: ${d.fullName}`,
    `Email: ${d.email}`,
    d.phone ? `Phone/WhatsApp: ${d.phone}` : null,
    d.country ? `Country: ${d.country}` : null,
    d.preferredContact ? `Preferred Contact: ${d.preferredContact}` : null,
    ``,
    `--- Journey ---`,
    `Travel Type: ${d.journeyTypes.join(", ") || "—"}`,
    `Destination(s): ${d.regions.join(", ") || "—"}`,
    d.customDestination ? `Destination in mind: ${d.customDestination}` : null,
    `Dates: ${d.startDate || "—"} to ${d.endDate || "—"}${d.flexibleDates ? " (flexible)" : ""}`,
    d.duration ? `Approximate Duration: ${d.duration}` : null,
    `Adults: ${d.adults}, Children: ${d.children}, Infants: ${d.infants}`,
    d.childAges ? `Child Ages: ${d.childAges}` : null,
    d.travelStyle ? `Travel Style: ${d.travelStyle}` : null,
    d.groupPreference ? `Group Preference: ${d.groupPreference}` : null,
    `Interests: ${d.interests.join(", ") || "—"}`,
    ``,
    `--- Special Requirements ---`,
    d.specialRequirements || "—",
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    await sendEnquiryEmail(`New Custom Journey Request — Safari Masti`, lines, d.email);
  } catch (err) {
    console.error("Failed to send journey request email:", err);
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
