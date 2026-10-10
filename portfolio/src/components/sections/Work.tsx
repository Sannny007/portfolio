"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/data/projects";

const finePointer = () =>
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // rows ka scroll reveal
  useGSAP(
    () => {
      gsap.from(".work-row", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: ".work-list", start: "top 80%" },
      });
    },
    { scope: root }
  );

  // preview card ko cursor ke peeche chalana
  useEffect(() => {
    if (!finePointer()) return;
    const el = preview.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0.8, opacity: 0 });

    const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      gsap.killTweensOf(el);
    };
  }, []);

  const show = (i: number) => {
    if (!finePointer()) return;
    setActive(i);
    gsap.to(preview.current, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
  };

  const hide = () => {
    if (!finePointer()) return;
    gsap.to(preview.current, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power3.out" });
  };

  const current = projects[active];

  return (
    <section ref={root} id="work" className="px-5 py-24 md:px-12 md:py-40">
      <div className="mb-10 flex items-baseline justify-between font-mono text-xs uppercase tracking-widest md:mb-16">
        <p>01 — Work</p>
        <p>({String(projects.length).padStart(2, "0")})</p>
      </div>

      <h2 className="text-about mb-12 font-display tracking-[-0.02em] md:mb-20">
        Selected <span className="italic text-accent">work</span>
      </h2>

      <ul className="work-list">
        {projects.map((p, i) => (
          <li key={p.slug} className="work-row">
            <div
              className="work-item group flex items-baseline gap-4 border-t border-ink/20 py-6 transition-opacity duration-300 md:gap-10 md:py-9"
              onMouseEnter={() => show(i)}
              onMouseLeave={hide}
            >
              <span className="font-mono text-xs tracking-widest opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1">
                <h3 className="text-about font-display transition-transform duration-500 ease-out group-hover:translate-x-3 md:group-hover:translate-x-6">
                  {p.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest opacity-60 md:hidden">
                  {p.category} · {p.year}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2 md:hidden">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden text-right font-mono text-xs uppercase leading-relaxed tracking-widest md:block">
                <p>{p.category}</p>
                <p className="opacity-50">{p.year}</p>
              </div>
            </div>
          </li>
        ))}
        <li className="border-t border-ink/20" aria-hidden />
      </ul>
      <div
        ref={preview}
        className="pointer-events-none fixed left-0 top-0 z-40 flex h-80 w-64 flex-col justify-between bg-ink p-5 text-paper opacity-0"
      >
        <p className="font-mono text-[11px] uppercase tracking-widest opacity-60">
          {String(active + 1).padStart(2, "0")} / {current.year}
        </p>
        <div>
          <p className="mb-4 font-display text-4xl italic leading-none">{current.title}</p>
          <ul className="space-y-1 font-mono text-[11px] uppercase tracking-widest">
            {current.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}