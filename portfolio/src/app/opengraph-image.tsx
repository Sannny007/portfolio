import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — Full-Stack Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#000000",
          color: "#ededed",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 680,
            height: 680,
            borderRadius: 680,
            display: "flex",
            background:
              "radial-gradient(circle, rgba(50,145,255,0.55), rgba(168,85,247,0.28) 45%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div style={{ fontSize: 28, color: "#a1a1a1", display: "flex" }}>Portfolio</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 52, color: "#8a8a8a", marginTop: 12, display: "flex" }}>
            Full-stack developer
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#a1a1a1", display: "flex" }}>
          {new URL(site.url).host}
        </div>
      </div>
    ),
    { ...size }
  );
}