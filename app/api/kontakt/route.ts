import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT_CATEGORIES } from "@/lib/content/contact";

const schema = z.object({
  firstName: z.string().min(1, "Vorname fehlt."),
  lastName: z.string().min(1, "Nachname fehlt."),
  email: z.string().email("Ungültige E-Mail."),
  phone: z.string().optional(),
  category: z.enum(CONTACT_CATEGORIES),
  message: z.string().min(5, "Bitte mindestens ein paar Worte."),
  // honeypot
  website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Ungültige Eingabe." },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? "info@sportpalast-lindlar.de";
  const from = process.env.CONTACT_EMAIL_FROM ?? "website@sportpalast-lindlar.de";

  if (!apiKey) {
    console.log("[contact] (noop, no RESEND_API_KEY):", d);
    return NextResponse.json({ ok: true, mode: "noop" });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Sportpalast Website <${from}>`,
    to,
    replyTo: d.email,
    subject: `[Kontakt] ${d.category} — ${d.firstName} ${d.lastName}`,
    text: [
      `Kategorie: ${d.category}`,
      `Name: ${d.firstName} ${d.lastName}`,
      `E-Mail: ${d.email}`,
      `Telefon: ${d.phone ?? "—"}`,
      "",
      "Nachricht:",
      d.message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Versand fehlgeschlagen.", detail: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
