import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { CONTACT_CATEGORIES } from "@/lib/content/contact";

const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel-Body-Limit liegt bei 4,5 MB
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

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
  // Formular sendet multipart/form-data (wegen optionalem Verordnungs-Upload);
  // JSON bleibt für Alt-Clients unterstützt.
  let fields: Record<string, unknown> = {};
  let file: File | null = null;

  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("multipart/form-data")) {
    const fd = await req.formData().catch(() => null);
    if (!fd) {
      return NextResponse.json({ error: "Ungültige Eingabe." }, { status: 400 });
    }
    fd.forEach((value, key) => {
      if (key === "attachment" && value instanceof File) file = value;
      else if (typeof value === "string") fields[key] = value;
    });
  } else {
    fields = (await req.json().catch(() => null)) ?? {};
  }

  const parsed = schema.safeParse(fields);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Ungültige Eingabe." },
      { status: 400 },
    );
  }

  let attachment: { filename: string; content: Buffer } | undefined;
  if (file) {
    const f = file as File;
    if (!ALLOWED_TYPES.includes(f.type)) {
      return NextResponse.json(
        { error: "Bitte PDF, JPG oder PNG hochladen." },
        { status: 400 },
      );
    }
    if (f.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "Datei darf maximal 4 MB groß sein." },
        { status: 400 },
      );
    }
    attachment = {
      filename: f.name || "anhang",
      content: Buffer.from(await f.arrayBuffer()),
    };
  }

  const d = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? "info@sportpalast-lindlar.de";
  const from = process.env.CONTACT_EMAIL_FROM ?? "website@sportpalast-lindlar.de";

  if (!apiKey) {
    console.log("[contact] (noop, no RESEND_API_KEY):", d, attachment?.filename);
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
      `Anhang: ${attachment?.filename ?? "—"}`,
      "",
      "Nachricht:",
      d.message,
    ].join("\n"),
    ...(attachment ? { attachments: [attachment] } : {}),
  });

  if (error) {
    return NextResponse.json(
      { error: "Versand fehlgeschlagen.", detail: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
