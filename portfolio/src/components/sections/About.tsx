"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { about } from "@/data/about";
import SocialLinks from "@/components/ui/SocialLinks";

const card = "about-fade rounded-2xl border border-ink/10 bg-ink/[0.03] p-6";
const cardLabel = "mb-3 text-sm text-ink/50";

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
            { opacity: 0.2 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".about-lead",
                start: "top 80%",
                end: "bottom 50%",
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
    <section ref={root} id="about" className="px-5 py-24 md:px-12 md:py-32">
      <p className="mb-6 text-sm text-ink/50 md:mb-10">About</p>

      <p className="about-lead text-about max-w-5xl font-display">{about.lead}</p>

      <div className="about-details mt-14 grid gap-10 md:mt-24 md:grid-cols-12">
        <div className="space-y-5 text-base leading-relaxed text-ink/70 md:col-span-6 md:text-lg">
          {about.body.map((p, i) => (
            <p key={i} className="about-fade">
              {p}
            </p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-6">
          <div className={`${card} sm:col-span-2`}>
            <p className={cardLabel}>Education</p>
            <p className="text-lg font-medium md:text-xl">{about.education.degree}</p>
            <p className="mt-1 text-ink/60">
              {about.education.school} · {about.education.status}
            </p>
          </div>

          <div className={card}>
            <p className={cardLabel}>Currently learning</p>
            <ul className="flex flex-wrap gap-2">
              {about.learning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/15 px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={card}>
            <p className={cardLabel}>Elsewhere</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}