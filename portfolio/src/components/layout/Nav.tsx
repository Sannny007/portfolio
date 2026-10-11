"use client";

import { useState } from "react";
import { getLenis } from "@/lib/lenis";
import ThemeToggle from "@/components/ui/ThemeToggle";
import GlowRing from "@/components/ui/GlowRing";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const lenis = getLenis();
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(href === "#" ? 0 : href, { duration: 1.4 });
    setOpen(false);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <div className="nav-glow pointer-events-auto w-full max-w-5xl">
          <GlowRing />
          <div className="nav-surface flex items-center justify-between gap-4 py-2.5 pl-5 pr-2.5 text-[15px] md:pl-7 md:pr-3 md:text-base">
            <a
              href="#"
              onClick={(e) => go(e, "#")}
              className="whitespace-nowrap font-medium tracking-tight">Sanny Kumar Sharma</a>
            <nav className="hidden items-center gap-2 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="rounded-full px-4 py-2 text-ink/60 transition-colors hover:text-ink">{l.label}</a>
              ))}
              <ThemeToggle />
              <a href="#contact" onClick={(e) => go(e, "#contact")} className="ml-1 rounded-full bg-ink px-6 py-2.5 font-medium text-paper transition-opacity hover:opacity-80">Contact</a>
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-paper"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-paper px-6 pt-20 transition-transform duration-500 ease-out md:hidden ${open ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav className="flex flex-col">
          {[...links, { label: "Contact", href: "#contact" }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="flex items-center justify-between border-b border-ink/10 py-5 text-2xl font-medium tracking-tight"
            >
              <span>{l.label}</span>
              <span className="font-mono text-xs text-ink/40">0{i + 1}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}