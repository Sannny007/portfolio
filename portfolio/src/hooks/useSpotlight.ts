import { useEffect, type RefObject } from "react";

export function useSpotlight(ref: RefObject<HTMLElement | null>, cardSelector: string) {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    const move = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(cardSelector);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, [ref, cardSelector]);
}