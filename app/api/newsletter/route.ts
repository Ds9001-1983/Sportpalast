import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Bitte eine gültige E-Mail-Adresse angeben."),
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

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    // Dev/preview mode without provider — pretend success so the UI is testable.
    return NextResponse.json({ ok: true, mode: "noop" });
  }

  const r = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: parsed.data.email,
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  });

  if (!r.ok && r.status !== 204) {
    const err = await r.text();
    return NextResponse.json(
      { error: "Anmeldung fehlgeschlagen.", detail: err },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
