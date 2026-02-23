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
  subtitle?: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  highlights: string[];
  buildNotes?: string[];
  media?: ProjectMedia[];
  /** Path to a display image in /public, e.g. "/images/quant-manager.png" */
  image?: string;
  sortOrder: number;
  status?: "live" | "wip" | "private";
}

export const projects: Project[] = [
  {
    id: "quant-manager",
    title: "Quant Manager",
    subtitle: "Prop Trading Risk & Execution Platform",
    description:
      "A unified risk management platform for prop traders. Automates daily profit locks, loss limits, timed rule windows, and real-time P&L monitoring across multiple funded accounts—so traders stay compliant without manual oversight.",
    tags: ["TypeScript", "React", "WebSocket", "Trading APIs", "Risk Engine"],
    links: [
      {
        label: "Live Platform",
        href: "https://www.quantmanager.net/",
        external: true,
      },
    ],
    highlights: [
      "Unified dashboard across accounts — equity, P&L, drawdown, lock status at a glance",
      "Daily profit target → auto-flatten + lock when reached",
      "Daily loss limit → auto-flatten + lock before breach",
      "Timed locks for high-risk windows and after-hours sessions",
      "Trailing balance protection with configurable thresholds",
      "One-click flatten & lock across all active positions",
      "Reusable templates for rule sets across funded accounts",
      "Custom rules and formula builder for advanced traders",
      "Real-time monitoring with alerts for limit proximity",
    ],
    buildNotes: [
      "Event-driven architecture with WebSocket streams for sub-second position updates",
      "Safety-first execution: all flatten/lock operations are idempotent and confirmed before state commit",
      "Rule engine uses a composable condition graph — formulas are parsed and validated client-side before submission",
      "End-to-end tests cover critical auto-flatten paths using replay of real market data sequences",
      "Deployed on serverless edge infra; cold start under 100ms with aggressive connection pooling",
    ],
    media: [
      { title: "Dashboard Overview", caption: "Unified account dashboard" },
      { title: "Risk Rule Builder", caption: "Custom formula and rule editor" },
      { title: "Real-Time Alerts", caption: "Limit monitoring and notification panel" },
    ],
    image: "/images/quant-manager.png",
    sortOrder: 1,
    status: "live",
  },
];
