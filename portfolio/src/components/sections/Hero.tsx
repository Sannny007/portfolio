"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { getLenis } from "@/lib/lenis";

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

        gsap.from(".hero-fade", {
          opacity: 0,
          y: 16,
          duration: 0.9,
          delay: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });

        gsap.from(".hero-photo", {
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        });
      });

      return onIntroDone(play);
    },
    { scope: root }
  );

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const lenis = getLenis();
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(href, { duration: 1.4 });
  };

  return (
    <section
      ref={root}
      className="hero-glow relative isolate flex min-h-svh items-center px-5 pb-12 pt-32 md:px-12"
    >
      <div className="grid w-full items-center gap-10 md:grid-cols-12 md:gap-8">
        <div className="order-2 flex flex-col gap-8 md:order-1 md:col-span-7">
          <p className="hero-fade inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink/70">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available
          </p>

          <h1 className="hero-title text-hero font-display">
            <span className="block">Sanny Kumar Sharma</span>
            <span className="block text-ink/45">Full-stack developer.</span>
          </h1>

          <p className="hero-fade max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            I build fast, polished web applications, from the interface and animation to the API
            and database behind it.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(e) => go(e, "#work")}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-ink/5"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-photo order-1 mx-auto w-44 sm:w-56 md:order-2 md:col-span-5 md:ml-auto md:w-full md:max-w-sm">
          <div className="nav-glow p-3px">
            <div className="nav-surface relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/sanny.png"
                alt="Portrait of Sanny Kumar Sharma"
                fill
                priority
                sizes="(min-width: 768px) 384px, 224px"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}