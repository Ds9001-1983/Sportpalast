import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            color: "#00ACA7",
            fontSize: 44,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
            fontFamily: "system-ui",
          }}
        >
          S
        </div>
      </div>
    ),
    size,
  );
}
