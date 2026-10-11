import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}