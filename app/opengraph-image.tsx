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
            "linear-gradient(135deg, #F8F4EE 0%, #EFE7DA 100%)",
          backgroundColor: "#F8F4EE",
          color: "#1F1A14",
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
            color: "#C2613F",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#C2613F",
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
              color: "#5C544A",
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
            color: "rgba(31,26,20,0.5)",
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
