import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { FOOTER_GROUPS } from "@/lib/content/navigation";
import { CONTACT } from "@/lib/content/contact";
import { HOURS_STUDIO, WEEKDAYS } from "@/lib/content/opening-hours";
import { NewsletterInline } from "@/components/sections/footer/NewsletterInline";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-bg-elevated">
      <div className="container-grid py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted">
              Dein Fitnessstudio im Oberbergischen seit 2004. 2 000 m²
              Glaspalast mit Panoramablick — Training, Wellness und Therapie
              unter einem Dach.
            </p>
            <NewsletterInline />
            <ul className="flex gap-2 pt-2">
              <SocialLink href={CONTACT.social.instagram} label="Instagram">
                <Instagram size={16} />
              </SocialLink>
              <SocialLink href={CONTACT.social.facebook} label="Facebook">
                <Facebook size={16} />
              </SocialLink>
              <SocialLink href={CONTACT.social.youtube} label="YouTube">
                <Youtube size={16} />
              </SocialLink>
            </ul>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="eyebrow mb-4">{group.label}</p>
              <ul className="space-y-2.5 text-sm">
                {group.children?.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-fg-muted transition-colors hover:text-brand"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm text-fg-muted">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  {CONTACT.studio.street}, {CONTACT.studio.zip}{" "}
                  {CONTACT.studio.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
                <a
                  href={`tel:${CONTACT.studio.phone.replace(/\s/g, "")}`}
                  className="hover:text-fg"
                >
                  {CONTACT.studio.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <a
                  href={`mailto:${CONTACT.studio.email}`}
                  className="hover:text-fg"
                >
                  {CONTACT.studio.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Öffnungszeiten Studio</p>
            <ul className="space-y-1 text-sm text-fg-muted">
              {WEEKDAYS.map((d) => (
                <li key={d} className="flex justify-between gap-4 font-mono">
                  <span className="text-fg-subtle">{d.slice(0, 2)}.</span>
                  <span>
                    {HOURS_STUDIO[d].open} – {HOURS_STUDIO[d].close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-fg-subtle md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Sportpalast GmbH & Co. KG. Alle Rechte
            vorbehalten.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Training mit Aussicht
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-brand hover:text-brand"
      >
        {children}
      </a>
    </li>
  );
}
