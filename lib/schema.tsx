import { CONTACT } from "@/lib/content/contact";
import { HOURS_STUDIO, type Weekday } from "@/lib/content/opening-hours";
import { PRICES } from "@/lib/content/prices";
import type { FaqItem } from "@/lib/content/faq";

const BASE = "https://www.sportpalast-lindlar.de";

const DAY_SCHEMA: Record<Weekday, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

/**
 * Fasst Wochentage mit identischen Öffnungszeiten zu einem
 * OpeningHoursSpecification-Eintrag zusammen.
 */
function buildOpeningHours() {
  const groups = new Map<string, { days: string[]; opens: string; closes: string }>();
  (Object.keys(HOURS_STUDIO) as Weekday[]).forEach((day) => {
    const { open, close } = HOURS_STUDIO[day];
    const key = `${open}-${close}`;
    const existing = groups.get(key);
    if (existing) existing.days.push(DAY_SCHEMA[day]);
    else groups.set(key, { days: [DAY_SCHEMA[day]], opens: open, closes: close });
  });
  return [...groups.values()].map((g) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: g.days,
    opens: g.opens,
    closes: g.closes,
  }));
}

/** Günstigster Monatsbeitrag eines Tarifs für das Offer-Markup. */
function lowestMonthly(slug: string) {
  const plan = PRICES.find((p) => p.slug === slug);
  if (!plan) return undefined;
  return Math.min(...plan.variants.map((v) => v.monthly));
}

export function LocalBusinessJsonLd() {
  const { studio, social } = CONTACT;
  const data = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "SportsActivityLocation", "LocalBusiness"],
    "@id": `${BASE}/#business`,
    name: studio.name,
    legalName: "Sportpalast GmbH & Co. KG",
    description:
      "Familiäres Fitnessstudio im Glaspalast Lindlar mit 2 000 m² Trainingsfläche, 30+ Kursen pro Woche, EGYM, Sauna & Wellness, Rehasport und Physiotherapie.",
    url: BASE,
    telephone: studio.phone.replace(/\s+/g, "-"),
    email: studio.email,
    image: `${BASE}/images/gen/hero.jpg`,
    logo: `${BASE}/brand/logo-ink.svg`,
    priceRange: "€€",
    foundingDate: "2004",
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.street,
      postalCode: studio.zip,
      addressLocality: studio.city,
      addressRegion: "NRW",
      addressCountry: "DE",
    },
    // Ortsmittelpunkt Lindlar — final mit präzisem Google-Place-Eintrag
    // (Schlosserstraße 33) verifizieren und ersetzen.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0186,
      longitude: 7.378,
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Sportpalast+Lindlar+Schlosserstra%C3%9Fe+33+51789+Lindlar",
    openingHoursSpecification: buildOpeningHours(),
    sameAs: [social.instagram, social.facebook, social.youtube],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Sauna & Wellness", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parkplatz (kostenfrei)", value: true },
      { "@type": "LocationFeatureSpecification", name: "WLAN", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aufzug", value: true },
      { "@type": "LocationFeatureSpecification", name: "Physiotherapie", value: true },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Club Abo",
        price: lowestMonthly("club")?.toFixed(2),
        priceCurrency: "EUR",
        description: "Voller Studio-Zugang inkl. Geräte, Kurse, Sauna & EGYM",
      },
      {
        "@type": "Offer",
        name: "Reha Plus",
        price: lowestMonthly("reha-plus")?.toFixed(2),
        priceCurrency: "EUR",
        description: "Rehasport mit vollem Studio-Zugang, mit Reha-Verordnung",
      },
      {
        "@type": "Offer",
        name: "Jugend Abo (16–19 Jahre)",
        price: lowestMonthly("jugend")?.toFixed(2),
        priceCurrency: "EUR",
        description: "Voller Trainingszugang zum reduzierten Tarif",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD wird serverseitig gerendert; kein XSS-Risiko, da nur statische Daten.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
