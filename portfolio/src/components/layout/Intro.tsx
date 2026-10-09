"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { finishedIntro } from "@/lib/intro";
import { site } from "@/data/site";
import Year from "../ui/Year";

export default function Intro() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const seen = sessionStorage.getItem("intro-seen");
      const reduce = window.matchMedia("(prefers-reduced-motions: reduce)").matches;

      if (seen || reduce) {
        setDone(true);
        finishedIntro();
        return;
      }

      document.documentElement.style.overflow = "hidden";
      const counter = { v: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("intro-seen", "1");
          document.documentElement.style.overflow = "";
          setDone(true);
        },
      });

      tl.from(".intro-inner", { opacity: 0, duration: 0.5 })
        .to(
          counter,
          {
            v: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
              if (count.current) {
                count.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
              }
            },
          },
          0.2
        )
        .to(".intro-inner", { opacity: 0, duration: 0.3 })
        .addLabel("reveal")
        .to(root.current, { yPercent: -100, duration: 1.1, ease: "power4.inOut" }, "reveal")
        .add(finishedIntro, "reveal");
    },
    { scope: root }
  );

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-100 bg-ink text-paper">
      <div className="intro-inner flex h-full flex-col justify-between p-5 md:p-12">
        <div className="flex justify-between font-mono text-xs uppercase tracking-widest">
          <span>{site.name}</span>
          <span>Portfolio - <Year /></span>
        </div>

        <div className="flex items-end justify-between">
          <span
            ref={count}
            className="text-hero font-display leading-none tracking-[-0.03em]"
          >
            000
          </span>
          <span className="mb-2 font-mono text-xs uppercase tracking-widest opacity-60">Loading...</span>
        </div>
      </div>
    </div>
  );
}