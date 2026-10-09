import { stack } from "@/data/stack";

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 md:gap-14 md:pr-14" aria-hidden={hidden}>
      {stack.map((item, i) => (
        <span key={item} className="flex items-center gap-8 md:gap-14">
          <span
            className={`text-marquee font-display tracking-[-0.02em] ${i % 2 === 1 ? "text-outline" : ""
              }`}
          >
            {item}
          </span>
          <span className="font-display text-marquee text-accent">/</span>
        </span>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <section aria-label="Tech stack" className="marquee overflow-hidden py-16 md:py-24">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </section>
  );
}