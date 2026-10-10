"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap, useGSAP } from "@/lib/gsap";
import { useSpotlight } from "@/hooks/useSpotlight";
import { projects } from "@/data/projects";

export default function Work() {
  const root = useRef<HTMLElement>(null);

  useSpotlight(root, ".stack-card");

  useGSAP(
    () => {
      gsap.from(".work-head", {
        opacity: 0,
        y: 24,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".work-head", start: "top 85%" },
      });

      gsap.from(".work-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: { trigger: ".work-grid", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="work" className="px-5 py-24 md:px-12 md:py-32">
      <p className="work-head mb-4 text-sm text-ink/50">Work</p>

      <h2 className="work-head text-about mb-12 max-w-3xl font-display md:mb-16">
        Selected <span className="text-ink/45">projects.</span>
      </h2>

      <div className="work-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="work-card stack-card group rounded-2xl border border-ink/10 bg-ink/3 p-2"
          >
            <div className="relative z-10">
              {/* image / placeholder */}
              <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-ink/10 bg-ink/4">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="placeholder-grid flex h-full items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                      {String(i + 1).padStart(2, "0")} — Preview coming soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-5">
                <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/50">
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                {(p.github || p.live) && (
                  <div className="mt-5 flex items-center gap-4 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="inline-flex items-center gap-2 text-ink/70 transition-colors hover:text-accent"
                      >
                        <FaGithub className="size-4" /> Code
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink/70 transition-colors hover:text-accent"
                      >
                        Live <FiArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}