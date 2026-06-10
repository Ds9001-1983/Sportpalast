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
  // 301-Weiterleitungen: (a) alte WordPress-URLs, (b) frühere Next-Routen —
  // beide auf die Informationsarchitektur nach Referenz §4.1. Vor dem
  // Domain-Umzug gegen die realen Alt-URLs (Search Console / Crawl)
  // verifizieren und bei Bedarf ergänzen.
  async redirects() {
    return [
      // ===== (a) Alte WordPress-URLs =====
      { source: "/trainingsflaeche", destination: "/fitness", permanent: true },
      { source: "/krafttraining", destination: "/fitness/geraetetraining", permanent: true },
      { source: "/freihanteltraining", destination: "/fitness/freihantel", permanent: true },
      { source: "/ausdauertraining", destination: "/fitness/ausdauer", permanent: true },
      { source: "/functional-training", destination: "/fitness/functional", permanent: true },
      { source: "/personal-training", destination: "/fitness/personal-training", permanent: true },
      { source: "/trainingsbetreuung", destination: "/fitness/personal-training", permanent: true },
      { source: "/egym-training", destination: "/fitness/egym", permanent: true },
      { source: "/egym", destination: "/fitness/egym", permanent: true },
      { source: "/vibrafit-training", destination: "/fitness/vibrafit", permanent: true },
      { source: "/inbody-koerperanalyse", destination: "/fitness/inbody", permanent: true },
      { source: "/fitnesskurse", destination: "/kurse", permanent: true },
      { source: "/sportpalast-app", destination: "/fitness/app", permanent: true },
      { source: "/lounge-cafe", destination: "/fitness/lounge-cafe", permanent: true },
      { source: "/muskelaufbau", destination: "/gesundheitsziele/muskelaufbau", permanent: true },
      { source: "/kondition", destination: "/gesundheitsziele/kondition", permanent: true },
      { source: "/rueckentraining", destination: "/gesundheitsziele/ruecken", permanent: true },
      { source: "/fit-im-alter", destination: "/gesundheitsziele/fit-im-alter", permanent: true },
      { source: "/gesundheit-foerdern", destination: "/gesundheitsziele/gesundheit-foerdern", permanent: true },
      { source: "/stress-abbauen", destination: "/gesundheitsziele/stressabbau", permanent: true },
      { source: "/abnehmen", destination: "/gesundheitsziele/abnehmen", permanent: true },
      { source: "/praeventionskurse", destination: "/gesundheitsziele/praeventionskurse", permanent: true },
      { source: "/probetraining-vereinbaren", destination: "/probetraining", permanent: true },
      { source: "/kooperationen", destination: "/firmenfitness", permanent: true },
      // AGB liegen extern (Fremd-Domain-Inhalt) — bewusst kein permanent.
      { source: "/agb", destination: "https://www.sportpalast-fitness.de/agb/", permanent: false },

      // ===== (b) Frühere Next-Routen =====
      { source: "/preise", destination: "/mitgliedschaft", permanent: true },
      { source: "/mitglied-werden", destination: "/mitgliedschaft", permanent: true },
      { source: "/sauna", destination: "/sauna-wellness", permanent: true },
      { source: "/fitness/trainingsflaeche", destination: "/fitness", permanent: true },
      { source: "/fitness/athletic-box", destination: "/fitness/functional", permanent: true },
      { source: "/fitness/lady-fitness", destination: "/mitgliedschaft", permanent: true },
      { source: "/fitness/fitnesskurse", destination: "/kurse", permanent: true },
      { source: "/fitness/kursplan", destination: "/kursplan", permanent: true },
      { source: "/gesundheit", destination: "/gesundheitsziele", permanent: true },
      { source: "/gesundheit/abnehmen", destination: "/gesundheitsziele/abnehmen", permanent: true },
      { source: "/gesundheit/muskelaufbau", destination: "/gesundheitsziele/muskelaufbau", permanent: true },
      { source: "/gesundheit/rueckentraining", destination: "/gesundheitsziele/ruecken", permanent: true },
      { source: "/gesundheit/stressabbau", destination: "/gesundheitsziele/stressabbau", permanent: true },
      { source: "/gesundheit/fitness-im-alter", destination: "/gesundheitsziele/fit-im-alter", permanent: true },
      { source: "/gesundheit/kondition", destination: "/gesundheitsziele/kondition", permanent: true },
      { source: "/gesundheit/gesundheitsfoerderung", destination: "/gesundheitsziele/gesundheit-foerdern", permanent: true },
      { source: "/gesundheit/praeventionskurse", destination: "/gesundheitsziele/praeventionskurse", permanent: true },
      { source: "/gesundheit/rehasport", destination: "/rehasport", permanent: true },
      { source: "/gesundheit/firmenfitness", destination: "/firmenfitness", permanent: true },
      { source: "/ueber-uns/team", destination: "/team", permanent: true },
    ];
  },
};

export default nextConfig;
