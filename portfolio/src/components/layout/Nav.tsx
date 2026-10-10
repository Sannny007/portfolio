"use client";

import { useState } from "react";
import { getLenis } from "@/lib/lenis";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
          <div className="nav-surface flex items-center justify-between gap-4 py-2.5 pl-5 pr-2.5 text-[15px] md:pl-7 md:pr-3 md:text-base">
            <a
              href="#"
              onClick={(e) => go(e, "#")}
              className="whitespace-nowrap font-medium tracking-tight"
            >
              Sanny Kumar Sharma
            </a>
            <nav className="hidden items-center gap-2 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="rounded-full px-4 py-2 text-ink/60 transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                className="ml-1 rounded-full bg-ink px-6 py-2.5 font-medium text-paper transition-opacity hover:opacity-80"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="rounded-full bg-ink px-5 py-2.5 font-medium text-paper"
              >
                {open ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-4 bg-paper px-5 transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {[...links, { label: "Contact", href: "#contact" }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            className="font-display text-5xl"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}