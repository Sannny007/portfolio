"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { stackGroups } from "@/data/stack";

export default function Stack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-head", {
          opacity: 0,
          y: 24,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".stack-head", start: "top 85%" },
        });

        gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: "top 88%" },
          });

          tl.from(card, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            clearProps: "opacity,transform",
          }).from(
            card.querySelectorAll(".stack-chip"),
            {
              opacity: 0,
              scale: 0.5,
              y: 20,
              duration: 0.6,
              ease: "back.out(2)",
              stagger: { each: 0.07, from: "random" },
              clearProps: "opacity,transform",
            },
            "-=0.55"
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );


  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const grid = root.current?.querySelector<HTMLElement>(".stack-grid");
    if (!grid) return;

    const move = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".stack-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    grid.addEventListener("pointermove", move);
    return () => grid.removeEventListener("pointermove", move);
  }, []);

  return (
    <section ref={root} id="stack" className="px-5 py-24 md:px-12 md:py-32">
      <p className="stack-head mb-4 text-sm text-ink/50">Tech stack</p>

      <h2 className="stack-head text-about mb-12 max-w-3xl font-display md:mb-16">
        Tools I use to build <span className="text-ink/45">end to end.</span>
      </h2>

      <div className="stack-grid grid gap-4 md:grid-cols-2">
        {stackGroups.map((g) => (
          <div
            key={g.title}
            className="stack-card rounded-2xl border border-ink/10 bg-ink/[0.03] p-6 md:p-8"
          >
            <div className="relative z-10">
              <h3 className="mb-1 text-lg font-medium">{g.title}</h3>
              <p className="mb-6 text-sm text-ink/50">{g.blurb}</p>

              <ul className="flex flex-wrap gap-2.5">
                {g.items.map(({ name, Icon, learning }) => (
                  <li
                    key={name}
                    className="stack-chip flex items-center gap-2.5 rounded-full border border-ink/15 px-4 py-2 text-sm transition-[translate,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent"
                  >
                    <Icon className="size-4" />
                    {name}
                    {learning && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                        learning
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}