import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="work" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">01 — Work</p>
      </section>
      <section id="about" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">02 — About</p>
      </section>
      <section id="contact" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">03 — Contact</p>
      </section>
    </main>
  );
}