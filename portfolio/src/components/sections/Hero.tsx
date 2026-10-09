"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      SplitText.create(".hero-title", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.12,
          });
        },
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        y: 12,
        duration: 0.9,
        delay: 0.9,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="flex min-h-svh flex-col justify-end gap-8 px-5 pb-8 pt-28 md:px-12 md:pb-12"
    >
      <h1 className="hero-title text-hero font-display leading-[0.9] tracking-[-0.03em]">
        Full-Stack developer who <span className="italic text-accent">builds</span> for the web.
      </h1>

      <div className="flex flex-col justify-between gap-4 border-t border-ink/20 pt-4 font-mono text-xs uppercase tracking-widest md:flex-row">
        <p className="hero-meta">React · Next.js · Node.js</p>
        <p className="hero-meta">Available for work</p>
        <p className="hero-meta">Scroll ↓</p>
      </div>
    </section>
  );
}