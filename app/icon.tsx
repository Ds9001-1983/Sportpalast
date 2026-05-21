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
          background: "#C2613F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            color: "#F8F4EE",
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
