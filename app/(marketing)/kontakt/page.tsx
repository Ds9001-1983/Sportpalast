import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { KontaktForm } from "@/components/sections/kontakt/KontaktForm";
import { MapEmbed } from "@/components/sections/kontakt/MapEmbed";
import { CONTACT } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreib uns, ruf an, oder komm einfach vorbei. Schlosserstraße 33, 51789 Lindlar.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Fragen? Wir sind dran."
        intro="Schreib uns über das Formular, ruf an oder schau direkt vorbei. Wir freuen uns auf dich."
      />

      <section className="pb-32">
        <div className="container-grid grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-h3 mb-8 font-display font-bold">
              Schreib uns eine Nachricht
            </h2>
            <KontaktForm />
          </div>

          <aside className="space-y-10">
            <Block
              icon={<MapPin size={18} />}
              title="Adresse"
              lines={[
                CONTACT.studio.street,
                `${CONTACT.studio.zip} ${CONTACT.studio.city}`,
              ]}
            />
            <Block
              icon={<Phone size={18} />}
              title="Studio"
              lines={[
                <a
                  key="t"
                  href={`tel:${CONTACT.studio.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand"
                >
                  {CONTACT.studio.phoneDisplay}
                </a>,
                <a
                  key="m"
                  href={`mailto:${CONTACT.studio.email}`}
                  className="hover:text-brand"
                >
                  {CONTACT.studio.email}
                </a>,
              ]}
            />
            <Block
              icon={<MessageCircle size={18} />}
              title="Physiotherapie"
              lines={[
                <a
                  key="t"
                  href={`tel:${CONTACT.physio.phone.replace(/\s/g, "")}`}
                  className="hover:text-brand"
                >
                  Tel. {CONTACT.physio.phoneDisplay}
                </a>,
                <a
                  key="w"
                  href={`https://wa.me/${CONTACT.physio.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  WhatsApp {CONTACT.physio.whatsappDisplay}
                </a>,
              ]}
            />
          </aside>
        </div>

        <div className="container-grid mt-20">
          <p className="eyebrow mb-4">So findest du uns</p>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}

function Block({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-brand">{icon}</div>
      <p className="eyebrow mb-2">{title}</p>
      <ul className="space-y-1 text-fg-muted">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
