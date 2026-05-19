"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");
    try {
      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error ?? "Anmeldung fehlgeschlagen.");
      setStatus("success");
      setMsg("Bitte bestätige deine E-Mail.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Unbekannter Fehler");
    }
  }

  return (
    <form onSubmit={submit} className="max-w-sm">
      <p className="eyebrow mb-2">Newsletter</p>
      <label className="group relative flex items-center overflow-hidden rounded-full border border-border bg-bg/40 focus-within:border-brand">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          aria-label="E-Mail-Adresse"
          disabled={status === "loading" || status === "success"}
          className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-fg-subtle"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          aria-label="Anmelden"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-bg transition-transform hover:scale-105 disabled:opacity-60 mr-1.5"
        >
          {status === "success" ? <Check size={14} /> : <ArrowRight size={14} />}
        </button>
      </label>
      {msg && (
        <p
          className={`mt-2 text-xs ${
            status === "error" ? "text-error" : "text-brand"
          }`}
        >
          {msg}
        </p>
      )}
    </form>
  );
}
