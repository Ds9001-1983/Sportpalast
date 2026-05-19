import type { Weekday } from "./opening-hours";

export interface ScheduleSlot {
  day: Weekday;
  start: string;
  end: string;
  courseSlug: string;
  note?: string;
}

export const SCHEDULE: ScheduleSlot[] = [
  // Montag
  { day: "Montag", start: "09:00", end: "10:00", courseSlug: "pilates" },
  { day: "Montag", start: "10:00", end: "11:00", courseSlug: "zumba" },
  { day: "Montag", start: "17:00", end: "18:00", courseSlug: "fatburner" },
  { day: "Montag", start: "18:00", end: "19:00", courseSlug: "hotiron" },
  { day: "Montag", start: "19:00", end: "19:45", courseSlug: "rehasport" },
  { day: "Montag", start: "20:00", end: "21:15", courseSlug: "ashtanga-yoga" },

  // Dienstag
  { day: "Dienstag", start: "09:00", end: "10:30", courseSlug: "yin-yoga" },
  { day: "Dienstag", start: "09:15", end: "10:00", courseSlug: "zirkel-training" },
  { day: "Dienstag", start: "10:30", end: "11:15", courseSlug: "rehasport" },
  { day: "Dienstag", start: "15:00", end: "16:00", courseSlug: "wingtsun", note: "Kinder" },
  { day: "Dienstag", start: "16:00", end: "17:00", courseSlug: "wingtsun", note: "Jugendliche" },
  { day: "Dienstag", start: "17:00", end: "18:00", courseSlug: "zumba" },
  { day: "Dienstag", start: "18:00", end: "19:00", courseSlug: "energetic-flow-yoga" },
  { day: "Dienstag", start: "19:00", end: "20:00", courseSlug: "functional-training" },
  { day: "Dienstag", start: "20:00", end: "21:00", courseSlug: "wingtsun", note: "Erwachsene" },

  // Mittwoch
  { day: "Mittwoch", start: "09:00", end: "10:00", courseSlug: "ruecken-relax" },
  { day: "Mittwoch", start: "10:00", end: "10:45", courseSlug: "rehasport-soft" },
  { day: "Mittwoch", start: "17:00", end: "18:00", courseSlug: "step-aerobic" },
  { day: "Mittwoch", start: "18:00", end: "19:00", courseSlug: "deepwork" },
  { day: "Mittwoch", start: "19:00", end: "20:00", courseSlug: "rueckenfit" },
  { day: "Mittwoch", start: "20:00", end: "21:00", courseSlug: "yoga" },

  // Donnerstag
  { day: "Donnerstag", start: "09:00", end: "10:00", courseSlug: "body-workout" },
  { day: "Donnerstag", start: "10:00", end: "10:45", courseSlug: "rehasport" },
  { day: "Donnerstag", start: "17:00", end: "18:00", courseSlug: "intervall-mix" },
  { day: "Donnerstag", start: "18:00", end: "19:00", courseSlug: "jumping-fitness" },
  { day: "Donnerstag", start: "19:00", end: "19:45", courseSlug: "rehasport" },
  { day: "Donnerstag", start: "20:00", end: "21:00", courseSlug: "boxen" },

  // Freitag
  { day: "Freitag", start: "09:30", end: "10:30", courseSlug: "yoga" },
  { day: "Freitag", start: "17:30", end: "18:30", courseSlug: "fatburner" },
  { day: "Freitag", start: "18:30", end: "19:30", courseSlug: "zumba" },

  // Samstag
  { day: "Samstag", start: "10:00", end: "11:00", courseSlug: "body-workout" },
  { day: "Samstag", start: "11:00", end: "12:15", courseSlug: "yin-yoga" },

  // Sonntag
  { day: "Sonntag", start: "10:00", end: "11:00", courseSlug: "pilates" },
  { day: "Sonntag", start: "11:00", end: "12:00", courseSlug: "deepwork" },
];
