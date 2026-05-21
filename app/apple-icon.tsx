import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#C2613F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#F8F4EE",
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: -6,
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
