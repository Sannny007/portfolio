import { site } from "@/data/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Full-stack developer",
    url: site.url,
    sameAs: site.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}