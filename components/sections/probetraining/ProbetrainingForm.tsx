"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const TIME_WINDOWS = [
  "Vormittag (08 – 12 Uhr)",
  "Mittag (12 – 16 Uhr)",
  "Nachmittag (16 – 19 Uhr)",
  "Abend (19 – 22 Uhr)",
] as const;

const schema = z.object({
  name: z.string().min(2, "Wie heißt du?"),
  phone: z.string().min(5, "Unter welcher Nummer erreichen wir dich?"),
  email: z
    .string()
    .email("Bitte eine gültige E-Mail.")
    .optional()
    .or(z.literal("")),
  date: z.string().min(1, "Wann passt es dir?"),
  timeWindow: z.enum(TIME_WINDOWS),
  message: z.string().optional(),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export function ProbetrainingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { timeWindow: TIME_WINDOWS[3] },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    setErrMsg("");
    try {
      const r = await fetch("/api/probetraining", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
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
          Anfrage ist raus — stark!
        </h3>
        <p className="mt-3 text-fg-muted">
          Wir melden uns schnellstmöglich, um deinen Wunschtermin zu
          bestätigen. Bei Fragen erreichst du uns telefonisch unter
          +49 (0) 2266 — 470 206.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-dark underline-offset-4 hover:underline"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message} {...register("name")} />
        <Field
          label="Telefon"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Field
          label="E-Mail (optional)"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Field
          label="Wunschtermin"
          type="date"
          error={errors.date?.message}
          {...register("date")}
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Zeitfenster
        </label>
        <select
          {...register("timeWindow")}
          className="w-full appearance-none rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-fg outline-none focus:border-brand"
        >
          {TIME_WINDOWS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
          Möchtest du uns noch etwas mitgeben? (optional)
        </label>
        <textarea
          rows={4}
          {...register("message")}
          className="w-full resize-none rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3 text-fg outline-none focus:border-brand"
        />
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

      {status === "error" && <p className="text-sm text-error">{errMsg}</p>}

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
          {status === "loading" ? "Senden …" : "Termin anfragen"}
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
