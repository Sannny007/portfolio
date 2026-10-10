import type { IconType } from "react-icons";
import { FiServer } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGreensock,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

type Tech = { name: string; Icon: IconType; learning?: boolean };
type Group = { title: string; blurb: string; items: Tech[] };

export const stackGroups: Group[] = [
  {
    title: "Frontend",
    blurb: "Interfaces that are fast, responsive and accessible.",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs, learning: true },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Redux Toolkit", Icon: SiRedux },
    ],
  },
  {
    title: "Animation & 3D",
    blurb: "Motion and 3D that support the design.",
    items: [
      { name: "GSAP", Icon: SiGreensock },
      { name: "Three.js", Icon: SiThreedotjs },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, authentication and server logic.",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "REST APIs", Icon: FiServer },
      { name: "JWT Auth", Icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Data & DevOps",
    blurb: "Storing data and shipping it reliably.",
    items: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Docker", Icon: SiDocker, learning: true },
    ],
  },
];