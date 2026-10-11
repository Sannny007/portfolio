"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpotlight } from "@/hooks/useSpotlight";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

function PinnedTrain() {
  const area = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => setMaxX(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: area,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <div
      ref={area}
      style={{ height: `calc(100svh + ${maxX}px)` }}
      className="relative hidden md:block"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max gap-6 px-12">
          {projects.map((p, i) => (
            <div key={p.slug} className="w-[52vw] max-w-3xl shrink-0">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Work() {
  const root = useRef<HTMLElement>(null);
  useSpotlight(root, ".stack-card");

  return (
    <section ref={root} id="work" className="pb-24 md:pb-0">
      <div className="px-5 pt-24 md:px-12 md:pt-32">
        <motion.p {...fade} className="mb-4 text-sm text-ink/50">
          Work
        </motion.p>
        <motion.h2 {...fade} className="text-about mb-12 max-w-3xl font-display">
          Selected <span className="text-ink/45">projects.</span>
        </motion.h2>
      </div>
      <PinnedTrain />
      <div className="grid gap-4 px-5 md:hidden">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}