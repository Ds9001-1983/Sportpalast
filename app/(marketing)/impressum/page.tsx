import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Sportpalast GmbH & Co. KG.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="pb-32">
        <div className="container-grid max-w-3xl space-y-10 text-fg-muted">
          <Block title="Angaben gemäß § 5 TMG">
            <p>Sportpalast GmbH & Co. KG</p>
            <p>Siepener Weg 10</p>
            <p>58540 Meinerzhagen</p>
          </Block>

          <Block title="Vertreten durch">
            <p>Uygar Özcelik</p>
            <p>Vera Dütting</p>
            <p>Wolfgang Feykens</p>
          </Block>

          <Block title="Kontakt">
            <p>
              Telefon:{" "}
              <a className="hover:text-brand" href="tel:+4922664702060">
                +49 (0) 2266 — 470 206
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                className="hover:text-brand"
                href="mailto:info@sportpalast-lindlar.de"
              >
                info@sportpalast-lindlar.de
              </a>
            </p>
          </Block>

          <Block title="Registereintrag">
            <p>Amtsgericht Meinerzhagen</p>
            <p>HRB 521</p>
          </Block>

          <Block title="Umsatzsteuer-ID">
            <p>DE 216167832</p>
          </Block>

          <Block title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>Sportpalast GmbH & Co. KG, vertreten durch Uygar Özcelik</p>
          </Block>

          <Block title="Streitbeilegung">
            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noreferrer noopener"
                className="break-all underline hover:text-brand"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </Block>

          <Block title="Bildquellen">
            <p>Adobe Stock · Shutterstock · 123RF</p>
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
      <div className="space-y-1">{children}</div>
    </section>
  );
}
