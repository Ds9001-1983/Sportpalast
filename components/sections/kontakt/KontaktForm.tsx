"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight, Check, Paperclip } from "lucide-react";
import {
  CONTACT_CATEGORIES,
  type ContactCategory,
} from "@/lib/content/contact";

const MAX_FILE_MB = 4;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// Kategorien, bei denen ein Dokumenten-Upload angeboten wird
// (z. B. Reha-Verordnung vorab senden — Conversion-Pfad §4.3).
const UPLOAD_CATEGORIES: ContactCategory[] = ["Rehasport", "Physiotherapie"];

const schema = z.object({
  firstName: z.string().min(1, "Vorname fehlt."),
  lastName: z.string().min(1, "Nachname fehlt."),
  email: z.string().email("Bitte eine gültige E-Mail."),
  phone: z.string().optional(),
  category: z.enum(CONTACT_CATEGORIES),
  message: z.string().min(5, "Bitte ein paar Worte."),
  attachment: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) =>
        !files || files.length === 0 || files[0].size <= MAX_FILE_MB * 1024 * 1024,
      `Datei darf maximal ${MAX_FILE_MB} MB groß sein.`,
    )
    .refine(
      (files) =>
        !files || files.length === 0 || ALLOWED_TYPES.includes(files[0].type),
      "Bitte PDF, JPG oder PNG hochladen.",
    ),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function KontaktForm({
  initialCategory = "Allgemeine Anfrage",
}: {
  initialCategory?: ContactCategory;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { category: initialCategory },
  });

  const category = watch("category");
  const showUpload = UPLOAD_CATEGORIES.includes(category);

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    setErrMsg("");
    try {
      const fd = new FormData();
      fd.set("firstName", data.firstName);
      fd.set("lastName", data.lastName);
      fd.set("email", data.email);
      if (data.phone) fd.set("phone", data.phone);
      fd.set("category", data.category);
      fd.set("message", data.message);
      if (data.website) fd.set("website", data.website);
      if (showUpload && data.attachment && data.attachment.length > 0) {
        fd.set("attachment", data.attachment[0]);
      }
      const r = await fetch("/api/kontakt", { method: "POST", body: fd });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error ?? "Versand fehlgeschlagen.");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
      setErrMsg(e instanceof Error ? e.message : "Unbekannter Fehler");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand/40 bg-brand/5 p-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand">
          <Check size={20} />
        </div>
        <h3 className="text-h3 font-display font-medium">
          Danke für deine Nachricht.
        </h3>
        <p className="mt-3 text-fg-muted">
          Wir melden uns innerhalb von 24 Stunden zurück. Bei dringenden
          Anliegen erreichst du uns telefonisch unter +49 (0) 2266 — 470 206.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-dark underline-offset-4 hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Vorname"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <Field
          label="Nachname"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
        <Field
          label="E-Mail"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Field
          label="Telefon (optional)"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Kategorie
        </label>
        <select
          {...register("category")}
          className="w-full appearance-none rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-fg outline-none focus:border-brand"
        >
          {CONTACT_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {showUpload && (
        <div>
          <label className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
            <Paperclip size={13} />
            Verordnung / Dokument (optional, PDF/JPG/PNG, max. {MAX_FILE_MB} MB)
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("attachment")}
            className="w-full rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-sm text-fg-muted outline-none file:mr-4 file:rounded-full file:border-0 file:bg-brand/10 file:px-4 file:py-1.5 file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-accent-dark focus:border-brand"
          />
          {errors.attachment && (
            <p className="mt-1 text-xs text-error">
              {errors.attachment.message as string}
            </p>
          )}
          <p className="mt-1.5 text-xs text-fg-subtle">
            Reha-Verordnung (Formular 56) vorab senden — wir prüfen sie und
            melden uns mit deinem Starttermin.
          </p>
        </div>
      )}

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Nachricht
        </label>
        <textarea
          rows={6}
          {...register("message")}
          className="w-full resize-none rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-fg outline-none focus:border-brand"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      {status === "error" && (
        <p className="text-sm text-error">{errMsg}</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-fg-subtle">
          Mit dem Absenden stimmst du der{" "}
          <a href="/datenschutz" className="text-fg-muted hover:text-brand">
            Datenschutzerklärung
          </a>{" "}
          zu.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-bg transition-colors hover:bg-brand disabled:opacity-60"
        >
          {status === "loading" ? "Senden …" : "Absenden"}
          <ArrowRight size={14} />
        </button>
      </div>
    </form>
  );
}

const Field = ({
  label,
  error,
  ...rest
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
      {label}
    </label>
    <input
      {...rest}
      className="w-full rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-fg outline-none focus:border-brand"
    />
    {error && <p className="mt-1 text-xs text-error">{error}</p>}
  </div>
);
