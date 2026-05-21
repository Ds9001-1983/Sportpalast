import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Workspace-Root explizit setzen, sonst pickt Next die package-lock.json
  // im Home-Verzeichnis und warnt.
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sportpalast-lindlar.de",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // 301-Weiterleitungen alter WordPress-URLs auf die neue Informationsarchitektur.
  // Best-effort-Mapping anhand der alten Sitemap — vor dem Domain-Umzug gegen die
  // realen Alt-URLs (Search Console / Crawl) verifizieren und bei Bedarf ergänzen.
  async redirects() {
    return [
      // Fitness-Bereich
      { source: "/trainingsflaeche", destination: "/fitness/trainingsflaeche", permanent: true },
      { source: "/krafttraining", destination: "/fitness/trainingsflaeche", permanent: true },
      { source: "/freihanteltraining", destination: "/fitness/trainingsflaeche", permanent: true },
      { source: "/ausdauertraining", destination: "/fitness/trainingsflaeche", permanent: true },
      { source: "/egym-training", destination: "/fitness/egym", permanent: true },
      { source: "/egym", destination: "/fitness/egym", permanent: true },
      { source: "/vibrafit-training", destination: "/fitness/vibrafit", permanent: true },
      { source: "/inbody-koerperanalyse", destination: "/fitness/inbody", permanent: true },
      { source: "/fitnesskurse", destination: "/fitness/fitnesskurse", permanent: true },
      { source: "/kurse", destination: "/fitness/fitnesskurse", permanent: true },
      { source: "/kursplan", destination: "/fitness/kursplan", permanent: true },
      { source: "/sportpalast-app", destination: "/fitness/app", permanent: true },
      { source: "/lounge-cafe", destination: "/fitness/lounge-cafe", permanent: true },

      // Gesundheits-Bereich
      { source: "/muskelaufbau", destination: "/gesundheit/muskelaufbau", permanent: true },
      { source: "/kondition", destination: "/gesundheit/kondition", permanent: true },
      { source: "/rueckentraining", destination: "/gesundheit/rueckentraining", permanent: true },
      { source: "/fit-im-alter", destination: "/gesundheit/fitness-im-alter", permanent: true },
      { source: "/gesundheit-foerdern", destination: "/gesundheit/gesundheitsfoerderung", permanent: true },
      { source: "/stress-abbauen", destination: "/gesundheit/stressabbau", permanent: true },
      { source: "/abnehmen", destination: "/gesundheit/abnehmen", permanent: true },
      { source: "/praeventionskurse", destination: "/gesundheit/praeventionskurse", permanent: true },
      { source: "/rehasport", destination: "/gesundheit/rehasport", permanent: true },
      { source: "/firmenfitness", destination: "/gesundheit/firmenfitness", permanent: true },

      // Sauna & Mitgliedschaft
      { source: "/sauna-wellness", destination: "/sauna", permanent: true },
      { source: "/mitgliedschaft", destination: "/mitglied-werden", permanent: true },
      { source: "/probetraining", destination: "/mitglied-werden#probetraining", permanent: true },
      { source: "/probetraining-vereinbaren", destination: "/mitglied-werden#probetraining", permanent: true },
    ];
  },
};

export default nextConfig;
