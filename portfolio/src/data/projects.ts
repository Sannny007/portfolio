export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  image?: string;
  live?: string;
  github?: string;
};


export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    year: "2026",
    category: "Full-stack web app",
    description:
      "One or two lines on what this project does and the problem it solves.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "2026",
    category: "REST API + Dashboard",
    description:
      "One or two lines on what this project does and the problem it solves.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "2025",
    category: "Interactive / 3D",
    description:
      "One or two lines on what this project does and the problem it solves.",
    stack: ["Three.js", "GSAP", "TypeScript"],
  },
];