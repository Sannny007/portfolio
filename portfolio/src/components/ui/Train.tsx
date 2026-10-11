"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function Train({
  children,
  baseVelocity = 2.5,
  scrollBoost = 0.5,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  scrollBoost?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px" });
  const reduce = useReducedMotion();

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!inView || reduce) return;

    const dir = baseVelocity < 0 ? -1 : 1;
    const boost = 1 + Math.min((Math.abs(smoothVelocity.get()) / 1000) * scrollBoost, 4);
    const dt = Math.min(delta, 50) / 1000;

    baseX.set(baseX.get() + dir * Math.abs(baseVelocity) * dt * boost);
  });

  if (reduce) {
    return <div className="flex flex-wrap gap-y-3 px-5 md:px-12">{children}</div>;
  }

  return (
    <div ref={ref} className="logo-mask overflow-hidden">
      <motion.div className="flex w-max" style={{ x }}>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}