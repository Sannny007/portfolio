export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    year: "2026",
    category: "Full-stack web app",
    stack: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "2026",
    category: "REST API + Dashboard",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "2025",
    category: "Interactive / 3D",
    stack: ["Three.js", "GSAP", "TypeScript"],
  },
];