import { ImageResponse } from "next/og";

export const alt = "Sportpalast Lindlar — Dein Fitnessstudio im Oberbergischen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,172,167,0.35), transparent 60%)",
          backgroundColor: "#0a0a0b",
          color: "#f5f5f4",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#00ACA7",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#00ACA7",
              marginRight: 16,
            }}
          />
          Sportpalast Lindlar
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
              maxWidth: 900,
            }}
          >
            Dein Weg. Dein Ziel. Unser Support.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(245,245,244,0.65)",
              maxWidth: 800,
            }}
          >
            2 000 m² Glaspalast · 30+ Kurse · EGYM · Sauna · Physiotherapie
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(245,245,244,0.45)",
          }}
        >
          <div>Training mit Aussicht</div>
          <div>sportpalast-lindlar.de</div>
        </div>
      </div>
    ),
    size,
  );
}
