"use client";

import { motion } from "framer-motion";
import { stackGroups } from "@/data/stack";
import Train from "@/components/ui/Train";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="px-5 md:px-12">
        <motion.p {...fade} className="mb-4 text-sm text-ink/50">
          Tech stack
        </motion.p>
        <motion.h2 {...fade} className="text-about mb-12 max-w-3xl font-display md:mb-16">
          Tools I use to build <span className="text-ink/45">end to end.</span>
        </motion.h2>
      </div>

      {stackGroups.map((g, i) => {
        const filled = Array.from(
          { length: Math.max(1, Math.ceil(8 / g.items.length)) },
          () => g.items
        ).flat();

        return (
          <div key={g.title} className="border-t border-ink/10 py-8 md:py-10">
            <div className="mb-5 flex items-baseline justify-between gap-6 px-5 md:px-12">
              <h3 className="text-lg font-medium md:text-xl">{g.title}</h3>
              <p className="hidden text-sm text-ink/50 md:block">{g.blurb}</p>
            </div>
            <ul className="sr-only">
              {g.items.map((t) => (
                <li key={t.name}>{t.name}</li>
              ))}
            </ul>

            <Train baseVelocity={i % 2 ? -2.5 : 1.5}scrollBoost={0}>
              {filled.map(({ name, Icon, learning }, k) => (
                <div
                  key={`${name}-${k}`}
                  className="mr-3 flex shrink-0 items-center gap-2.5 rounded-full border border-ink/15 bg-paper/60 px-5 py-2.5 text-sm md:text-base"
                >
                  <Icon className="size-4 md:size-5" />
                  {name}
                  {learning && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      learning
                    </span>
                  )}
                </div>
              ))}
            </Train>
          </div>
        );
      })}
    </section>
  );
}