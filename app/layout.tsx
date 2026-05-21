import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Montserrat, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { SoundToggle } from "@/components/layout/SoundToggle";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LocalBusinessJsonLd } from "@/lib/schema";
import "./globals.css";

const display = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8f4ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sportpalast-lindlar.de"),
  title: {
    default: "Sportpalast Lindlar — Dein Fitnessstudio im Oberbergischen",
    template: "%s · Sportpalast Lindlar",
  },
  description:
    "2 000 m² Glaspalast mit Panoramablick. 30+ Kurse, EGYM, Sauna & Wellness, Physiotherapie. Dein Weg, dein Ziel, unser Support.",
  applicationName: "Sportpalast Lindlar",
  authors: [{ name: "Sportpalast GmbH & Co. KG" }],
  keywords: [
    "Fitnessstudio Lindlar",
    "Sportpalast",
    "EGYM",
    "Rehasport Lindlar",
    "Sauna Lindlar",
    "Physiotherapie Lindlar",
    "Oberbergischer Kreis",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.sportpalast-lindlar.de",
    siteName: "Sportpalast Lindlar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-fg antialiased">
        <LocalBusinessJsonLd />
        <SoundProvider>
          <LenisProvider>
            <ScrollProgress />
            {children}
            <SoundToggle />
          </LenisProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
