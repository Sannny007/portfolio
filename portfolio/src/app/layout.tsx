import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, DM_Mono } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Cursor from "@/components/layout/Cursor";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Sanny Kumar Sharma — Full-Stack Developer",
  description: "Portfolio of Sanny Kumar Sharma, a full-stack developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}