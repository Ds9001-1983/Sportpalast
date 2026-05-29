export const CONTACT = {
  studio: {
    name: "Sportpalast Lindlar",
    street: "Schlosserstraße 33",
    zip: "51789",
    city: "Lindlar",
    phone: "+49 2266 470206",
    phoneDisplay: "+49 (0) 2266 — 470 206",
    email: "info@sportpalast-lindlar.de",
  },
  physio: {
    phone: "+49 2266 470207",
    phoneDisplay: "+49 (0) 2266 — 470 207",
    whatsapp: "+49 155 63183509",
    whatsappDisplay: "+49 (0) 155 — 631 835 09",
  },
  sister: {
    name: "Sportpalast Meinerzhagen",
    phone: "+49 2354 12774",
    phoneDisplay: "+49 (0) 2354 — 12 774",
  },
  social: {
    instagram: "https://www.instagram.com/sportpalast.lindlar",
    facebook: "https://www.facebook.com/FitAndFunSportpalast",
    youtube: "https://www.youtube.com/@SportpalastLindlarMeinerzhagen",
  },
} as const;

export const CONTACT_CATEGORIES = [
  "Allgemeine Anfrage",
  "Terminvereinbarung",
  "Rückrufbitte",
  "Beratung zur Mitgliedschaft",
  "Kursangebot",
  "Fitness",
  "Physiotherapie",
  "Sonstiges",
] as const;

export type ContactCategory = (typeof CONTACT_CATEGORIES)[number];
