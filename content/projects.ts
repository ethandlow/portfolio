export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectMedia {
  title: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  media?: ProjectMedia[];
  /** Path to a display image in /public, e.g. "/images/quant-manager.png" */
  image?: string;
  sortOrder: number;
}

export const projects: Project[] = [
  {
    id: "quant-manager",
    title: "Quant Manager",
    description:
      "A comprehensive risk management plugin for Quantower with a website for marketing, documentation, and support.",
    tags: ["C#", "TailwindCSS", "Next.js", "TypeScript"],
    links: [
      {
        label: "Website",
        href: "https://www.quantmanager.net/",
        external: true,
      },
    ],
    image: "/images/quant-manager.png",
    sortOrder: 1,
  },
];
