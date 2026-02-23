export interface ExperienceLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface Experience {
    id: string;
    /** Company / org name — displayed in "Client" column */
    org: string;
    /** Short description of the engagement — displayed in "Project" column */
    project: string;
    /** Category — displayed in "Type" column, e.g. "Founder", "Contract", "Full-time" */
    type: string;
    /** Platform / product built on or for — displayed in "Platform" column */
    platform?: string;
    /** Legacy fields */
    role?: string;
    dates?: string;
    location?: string;
    bullets?: string[];
    links?: ExperienceLink[];
    sortOrder: number;
}

export const experiences: Experience[] = [
    {
        id: "quant-manager-founder",
        org: "Quant Manager",
        project:
            "Designed and shipped a real-time risk management platform for prop traders — auto-flatten rules, daily P&L limits, timed locks, and a custom formula builder across funded accounts.",
        type: "Founder",
        platform: "Quantower",
        role: "Founder & Lead Engineer",
        dates: "2024 – Present",
        links: [{ label: "quantmanager.net", href: "https://www.quantmanager.net/", external: true }],
        sortOrder: 1,
    },
    {
        id: "software-engineer",
        org: "Previous Employer",
        project:
            "Built internal tooling and data pipelines; led migration of legacy services to a modern TypeScript API-first architecture.",
        type: "Full-time",
        platform: "",
        role: "Software Engineer",
        dates: "2022 – 2024",
        sortOrder: 2,
    },
];
