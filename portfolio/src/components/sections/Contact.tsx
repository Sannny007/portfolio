"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { site } from "@/data/site";
import LocalTime from "@/components/ui/LocalTime";
import SocialLinks from "@/components/ui/SocialLinks";
import ContactForm from "./ContactForm";
import Year from "@/components/ui/Year";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
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
              immediateRender: false,
              scrollTrigger: { trigger: ".contact-title", start: "top 85%" },
            });
          },
        });

        gsap.from(".contact-form", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".contact-form", start: "top 90%" },
        });

        gsap.from(".contact-fade", {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".contact-footer", start: "top 92%" },
        });
      });

      return () => mm.revert();
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
      className="flex min-h-svh flex-col justify-between px-5 pb-6 pt-24 md:px-12 md:pb-10 md:pt-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="mb-6 text-sm text-ink/50 md:mb-10">Contact</p>
          <h2 className="contact-title text-hero font-display">
            Let&apos;s build something <span className="text-accent">together.</span>
          </h2>
        </div>

        <div className="contact-form md:col-span-5 md:pt-14">
          <ContactForm />
        </div>
      </div>

      <footer className="contact-footer mt-24 grid gap-6 border-t border-ink/20 pt-5 font-mono text-xs uppercase tracking-widest md:grid-cols-3 md:items-center">
        <p className="contact-fade">
          <LocalTime location={site.location} timeZone={site.timeZone} abbr={site.timeZoneAbbr} />
        </p>

        <SocialLinks className="contact-fade md:justify-center" />

        <div className="contact-fade flex items-center justify-between md:justify-end md:gap-8">
          <span className="opacity-50">
            © <Year /> {site.name}
          </span>
          <button onClick={toTop} className="transition-colors hover:text-accent">
            Top ↑
          </button>
        </div>
      </footer>
    </section>
  );
}