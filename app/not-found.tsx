import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-dark">
          404
        </p>
        <h1 className="text-display mt-4 font-display">Nicht gefunden.</h1>
        <p className="mt-4 text-fg-muted">
          Diese Seite gibt's bei uns nicht — oder noch nicht.
        </p>
        <div className="mt-10">
          <MagneticButton href="/">Zur Startseite</MagneticButton>
        </div>
        <Link
          href="/kontakt"
          className="mt-6 inline-block text-sm text-fg-muted underline-offset-4 hover:text-brand hover:underline"
        >
          Brauchst du Hilfe? Kontaktiere uns
        </Link>
      </div>
    </main>
  );
}
