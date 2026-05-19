export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lichtdurchflutet, hochwertig, persönlich — hier trainiert man wirklich gerne. Das Team ist immer ansprechbar.",
    author: "Sandra K.",
    role: "Mitglied seit 2019",
  },
  {
    quote:
      "Die Kombination aus Physio direkt im Studio und qualifizierten Trainern ist Gold wert. Mein Rücken dankt es mir.",
    author: "Dr. Markus L.",
    role: "Mitglied seit 2021",
  },
  {
    quote:
      "EGYM hat mein Training auf ein neues Level gehoben — kurz, effizient und ich sehe echte Fortschritte.",
    author: "Julia M.",
    role: "Mitglied seit 2023",
  },
  {
    quote:
      "Nach der Sauna mit Blick ins Oberbergische — das hat fast schon was Therapeutisches.",
    author: "Wolfgang B.",
    role: "Mitglied seit 2017",
  },
];
