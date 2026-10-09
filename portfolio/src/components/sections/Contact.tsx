"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { site } from "@/data/site";
import LocalTime from "../ui/LocalTime";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      SplitText.create(".contact-title", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.12,
            scrollTrigger: { trigger: ".contact-title", start: "top 85%" },
          });
        },
      });

      gsap.from(".contact-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".contact-details", start: "top 92%" },
      });
    },
    { scope: root }
  );

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0 });
  };

  return (
    <section
      ref={root}
      id="contact"
      className="flex min-h-svh flex-col justify-between px-5 pb-6 pt-24 md:px-12 md:pb-10 md:pt-40"
    >
      <div>
        <p className="mb-10 font-mono text-xs uppercase tracking-widest md:mb-16">Contact</p>
        <h2 className="contact-title text-hero font-display tracking-[-0.03em]">
          Let&apos;s build something <span className="italic text-accent">together.</span>
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="contact-details contact-fade text-about mt-10 inline-block wrap-break border-b border-ink/30 font-display italic transition-colors hover:border-accent hover:text-accent md:mt-16"
        >
          {site.email}
        </a>
      </div>

      <footer className="mt-24 grid gap-6 border-t border-ink/20 pt-5 font-mono text-xs uppercase tracking-widest md:grid-cols-3 md:items-center">
        <p className="contact-fade">
          <LocalTime location={site.location} timeZone={site.timeZone} abbr={site.timeZoneAbbr} />
        </p>

        <ul className="contact-fade flex gap-6 md:justify-center">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="transition-colors hover:text-accent">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>

        <div className="contact-fade flex items-center justify-between md:justify-end md:gap-8">
          <span className="opacity-50">
            © {new Date().getFullYear()} {site.name}
          </span>
          <button onClick={toTop} className="transition-colors hover:text-accent">
            Top ↑
          </button>
        </div>
      </footer>
    </section>
  );
}