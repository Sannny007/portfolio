import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { site } from "@/data/site";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FiMail,
} as const;

export default function SocialLinks({ className = "" }: { className: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {site.socials.map((s) => {
        const Icon = icons[s.icon];
        const external = s.href.startsWith("http");

        return (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" }: {})}
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-accen hover:text-accent"
              >
                <Icon className="size-18px" />
              </a>
          </li>
        );
      })}
    </ul>
  );
}