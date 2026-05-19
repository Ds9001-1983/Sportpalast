export type Weekday =
  | "Montag"
  | "Dienstag"
  | "Mittwoch"
  | "Donnerstag"
  | "Freitag"
  | "Samstag"
  | "Sonntag";

export const WEEKDAYS: Weekday[] = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

export interface HourRange {
  open: string;
  close: string;
  note?: string;
}

export const HOURS_STUDIO: Record<Weekday, HourRange> = {
  Montag: { open: "08:00", close: "22:00" },
  Dienstag: { open: "07:00", close: "22:00" },
  Mittwoch: { open: "07:00", close: "22:00" },
  Donnerstag: { open: "07:00", close: "22:00" },
  Freitag: { open: "08:00", close: "22:00" },
  Samstag: { open: "09:00", close: "19:00" },
  Sonntag: { open: "09:00", close: "19:00" },
};

export const HOURS_SAUNA: Record<Weekday, HourRange> = {
  Montag: { open: "16:00", close: "21:30" },
  Dienstag: { open: "16:00", close: "21:30" },
  Mittwoch: { open: "11:00", close: "21:30", note: "Damensauna" },
  Donnerstag: { open: "16:00", close: "21:30" },
  Freitag: { open: "11:00", close: "21:30" },
  Samstag: { open: "09:30", close: "18:30" },
  Sonntag: { open: "09:30", close: "18:30" },
};

export const HOLIDAYS: { date: string; label: string; hours: string }[] = [
  { date: "24.12.", label: "Heiligabend", hours: "09:00 – 15:00" },
  { date: "25.12.", label: "1. Weihnachtstag", hours: "geschlossen" },
  { date: "31.12.", label: "Silvester", hours: "09:00 – 15:00" },
  { date: "01.01.", label: "Neujahr", hours: "geschlossen" },
];
