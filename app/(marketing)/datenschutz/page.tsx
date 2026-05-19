import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Sportpalast GmbH & Co. KG.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <section className="pb-32">
        <div className="container-grid max-w-3xl space-y-10 text-fg-muted">
          <Block title="Verantwortlicher">
            <p>Sportpalast GmbH & Co. KG</p>
            <p>Siepener Weg 10, 58540 Meinerzhagen</p>
            <p>
              Tel.:{" "}
              <a className="hover:text-brand" href="tel:+4923541277">
                +49 (0) 2354 — 127 74
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                className="hover:text-brand"
                href="mailto:info@sportpalast-meinerzhagen.de"
              >
                info@sportpalast-meinerzhagen.de
              </a>
            </p>
          </Block>

          <Block title="Datenschutzbeauftragter">
            <p>bensom GmbH — Herr Michael Lang</p>
            <p>Alte Heerstr. 8, 53757 Sankt Augustin</p>
            <p>
              Tel.:{" "}
              <a className="hover:text-brand" href="tel:+492241879781">
                02241 — 87 97 813
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a className="hover:text-brand" href="mailto:dsb.lang@bensom.gmbh">
                dsb.lang@bensom.gmbh
              </a>
            </p>
          </Block>

          <Block title="Erhebung allgemeiner Daten">
            <p>
              Beim Aufruf der Website werden technisch notwendige Informationen
              wie Browsertyp, Betriebssystem, IP-Adresse und Zugriffsdaten
              gespeichert, um die Funktionsfähigkeit und Sicherheit unserer
              Systeme zu gewährleisten.
            </p>
          </Block>

          <Block title="Rechtsgrundlagen">
            <p>
              Die Verarbeitung erfolgt auf Basis der Art. 6 und 9 DSGVO —
              insbesondere Einwilligung, Vertragserfüllung und berechtigte
              Interessen.
            </p>
          </Block>

          <Block title="Deine Rechte">
            <p>
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung sowie Widerspruch und
              Datenübertragbarkeit.
            </p>
          </Block>

          <Block title="Kontaktformular & Newsletter">
            <p>
              Daten, die du im Kontaktformular eingibst, werden ausschließlich
              zur Beantwortung deiner Anfrage genutzt. Newsletter-Anmeldungen
              erfolgen via Double-Opt-In über Brevo (Sendinblue) — Server in
              der EU.
            </p>
          </Block>

          <Block title="Speicherdauer">
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der
              Verarbeitung entfällt — unter Berücksichtigung gesetzlicher
              Aufbewahrungsfristen.
            </p>
          </Block>

          <Block title="Cookies & externe Tools">
            <p>
              Wir verzichten bewusst auf trackende Cookies. Karten werden via
              OpenStreetMap eingebunden — ohne Cookie. Reichweitenmessung
              erfolgt — soweit aktiv — über cookieless Tools.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-display text-xl font-bold text-fg">{title}</h2>
      <div className="space-y-2 leading-relaxed">{children}</div>
    </section>
  );
}
