import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEnquiryEmail } from "@/lib/mailer";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1).max(4000),
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

  const { name, email, phone, message } = parsed.data;

  const text = [
    `New contact enquiry — Safari Masti website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    ``,
    `Message:`,
    message,
    ``,
    `Submitted: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendEnquiryEmail(`New Contact Enquiry — Safari Masti`, text, email);
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please call or WhatsApp us instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
