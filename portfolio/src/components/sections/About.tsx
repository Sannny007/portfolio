"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { about } from "@/data/about";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      SplitText.create(".about-lead", {
        type: "words",
        autoSplit: true,
        onSplit(self) {
          return gsap.fromTo(
            self.words,
            { opacity: 0.15 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".about-lead",
                start: "top 80%",
                end: "bottom 45%",
                scrub: true,
              },
            }
          );
        },
      });
      
      gsap.from(".about-fade", {
        opacity: 0,
        y: 24,
        duration: 1,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-details", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="about" className="px-5 py-24 md:px-12 md:py-40">
      <p className="mb-10 font-mono text-xs uppercase tracking-widest md:mb-16">02 — About</p>

      <p className="about-lead text-about max-w-[22ch] font-display leading-[1.08] tracking-[-0.02em] md:max-w-[26ch]">
        {about.lead}
      </p>

      <div className="about-details mt-16 grid gap-12 border-t border-ink/20 pt-6 md:mt-28 md:grid-cols-12">
        <div className="space-y-5 text-base leading-relaxed md:col-span-6 md:text-lg">
          {about.body.map((p, i) => (
            <p key={i} className="about-fade">
              {p}
            </p>
          ))}
        </div>

        <div className="space-y-10 font-mono text-xs uppercase leading-relaxed tracking-widest md:col-span-4 md:col-start-9">
          <div className="about-fade">
            <p className="mb-2 opacity-50">Education</p>
            <p>{about.education.degree}</p>
            <p>{about.education.school}</p>
            <p>{about.education.status}</p>
          </div>

          <div className="about-fade">
            <p className="mb-2 opacity-50">Currently learning</p>
            <p>{about.learning.join(" · ")}</p>
          </div>

          <div className="about-fade">
            <p className="mb-2 opacity-50">Elsewhere</p>
            <ul className="space-y-1">
              {about.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-accent">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}