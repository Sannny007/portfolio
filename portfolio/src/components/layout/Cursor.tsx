"use client"

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = ref.current!;
    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 1 });

    const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

    const move = (e: MouseEvent) => {
      x(e.clientX);
      y(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const onLink = (e.target as HTMLElement).closest("a, button");
      gsap.to(el, { scale: onLink ? 3.5 : 1, duration: 0.3, ease: "power3.out" });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-60 h-3 w-3 rounded-full bg-accent opacity-0"
      />
  );
}