import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <section id="contact" className="min-h-svh px-5 py-24 md:px-12">
        <p className="font-mono text-xs uppercase tracking-widest">03 — Contact</p>
      </section>
    </main>
  );
}