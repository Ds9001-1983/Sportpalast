#!/usr/bin/env node
// Extracts brand colors and font families from the live sportpalast-lindlar.de site.
// Fetches the homepage, locates all linked stylesheets, parses hex colors and font-family
// declarations, and prints frequency-ranked top values for verification before they are
// committed to styles/tokens.css.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = "https://www.sportpalast-lindlar.de";
const __dirname = dirname(fileURLToPath(import.meta.url));

const fetchText = async (url) => {
  const r = await fetch(url, { headers: { "user-agent": "ci-extract/1.0" } });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
};

const home = await fetchText(ROOT);

const stylesheetUrls = [
  ...home.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi),
].map((m) => (m[1].startsWith("http") ? m[1] : new URL(m[1], ROOT).toString()));

console.log(`Found ${stylesheetUrls.length} stylesheets`);

const allCss = (
  await Promise.all(
    stylesheetUrls.map((u) =>
      fetchText(u).catch((e) => {
        console.warn(`  skip ${u}: ${e.message}`);
        return "";
      }),
    ),
  )
).join("\n");

const count = (regex) => {
  const map = new Map();
  for (const m of allCss.matchAll(regex)) {
    const key = m[1].toLowerCase();
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
};

const hexColors = count(/(#[0-9a-fA-F]{6})\b/g).slice(0, 20);
const rgbColors = count(/(rgba?\([^)]+\))/g).slice(0, 15);
const fonts = count(/font-family\s*:\s*([^;}]+)/gi).slice(0, 10);

const report = {
  source: ROOT,
  stylesheets: stylesheetUrls,
  topHexColors: hexColors.map(([hex, n]) => `${hex} (${n}×)`),
  topRgbColors: rgbColors.map(([rgb, n]) => `${rgb} (${n}×)`),
  topFonts: fonts.map(([f, n]) => `${f.trim()} (${n}×)`),
};

mkdirSync(`${__dirname}/../.ci-report`, { recursive: true });
writeFileSync(
  `${__dirname}/../.ci-report/ci-report.json`,
  JSON.stringify(report, null, 2),
);

console.log("\n=== Top Hex Colors ===");
report.topHexColors.forEach((c) => console.log(" ", c));
console.log("\n=== Top RGB Colors ===");
report.topRgbColors.forEach((c) => console.log(" ", c));
console.log("\n=== Top Font Families ===");
report.topFonts.forEach((f) => console.log(" ", f));
console.log("\nFull report written to .ci-report/ci-report.json");
