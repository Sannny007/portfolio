"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const play = contextSafe!(() => {
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
              delay: 0.15,
            });
          },
        });

        gsap.from(".hero-meta", {
          opacity: 0,
          y: 12,
          duration: 0.9,
          delay: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      });

      return onIntroDone(play);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="flex min-h-svh flex-col justify-end gap-8 px-5 pb-8 pt-28 md:px-12 md:pb-12"
    >
      <h1 className="hero-title text-hero font-display tracking-[-0.03em]">
        Full-stack developer who <span className="italic text-accent">builds</span> for the web.
      </h1>

      <div className="flex flex-col justify-between gap-4 border-t border-ink/20 pt-4 font-mono text-xs uppercase tracking-widest md:flex-row">
        <p className="hero-meta">React · Next.js · Node.js</p>
        <p className="hero-meta">Available for work</p>
        <p className="hero-meta">Scroll ↓</p>
      </div>
    </section>
  );
}