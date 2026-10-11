export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
};


const repos = {
  velora: "https://github.com/Sannny007/MERN-PROJECT",
  solecraft: "https://github.com/Sannny007/solecraft",
  orbyte: "https://github.com/Sannny007/orbyte",
  vaultchain: "https://github.com/Sannny007/vaultchain",
};

export const projects: Project[] = [
  {
    slug: "velora",
    title: "Velora",
    year: "2025",
    category: "Full-stack e-commerce",
    description:
      "A full-stack e-commerce website built on the MERN stack, with JWT-based authentication, real-time features and smooth animations.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/velora.webp",
    github: repos.velora || undefined,
  },
  {
    slug: "solecraft",
    title: "SoleCraft",
    year: "2026",
    category: "3D web app",
    description:
      "An interactive 3D sneaker customizer where users change the colours, parts and materials of a shoe and see the result instantly on the 3D model.",
    stack: ["React", "Three.js", "Node.js", "MongoDB"],
    image: "/images/projects/solecraft.webp",
    github: repos.solecraft || undefined,
  },
  {
    slug: "orbyte",
    title: "Orbyte",
    year: "2026",
    category: "Remote access app",
    description:
      "Orbyte turns your phone into a remote control for your laptop. Browse drives and files, download or delete them, open a terminal and power the machine off from anywhere. File access and the terminal sit behind password checks.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/orbyte.webp",
    github: repos.orbyte || undefined,
  },
  {
    slug: "vaultchain",
    title: "VaultChain",
    year: "2026",
    category: "SIH 2026 · In progress",
    description:
      "Smart India Hackathon 2026 project: a case-centric document system for legal and investigation records. It is designed around role-based access, encryption, SHA-256 integrity checks and audit trails, with OCR and AI classification on the roadmap. The login page and dashboard are built so far.",
    stack: ["Cybersecurity", "Document management", "RBAC", "SHA-256"],
    image: "/images/projects/vaultchain.webp",
    github: repos.vaultchain || undefined,
  },
];