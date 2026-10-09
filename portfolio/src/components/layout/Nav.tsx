"use client";

import { useState } from "react";
import { getLenis } from "@/lib/lenis";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 font-mono text-xs uppercase tracking-widest md:px-12">
      <a href="#" onClick={(e) => go(e, "#")} className="relative z-50">
        Sanny Kumar Sharma
      </a>

      <nav className="hidden gap-8 md:flex">
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} className="transition-colors hover:text-accent">
            <span className="mr-2 opacity-50">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 md:hidden"
        aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        <div
          className={`fixed inset-0 flex flex-col justify-center gap-4 bg-paper px-5 transition-transform duration-500 ease-out md:hidden ${open ? "translate-y-0" : "-translate-y-full"}`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="font-display text-6xl normal-case tracking-normal"
                >
                  {l.label}
                </a>
            ))}
          </div>
    </header>
  );
}