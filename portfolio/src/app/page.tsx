import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="work" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">01 — Work</p>
      </section>
      <About />
      <section id="contact" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">03 — Contact</p>
      </section>
    </main>
  );
}