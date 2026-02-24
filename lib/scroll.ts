/**
 * Scroll to an element by id. Uses native smooth scroll (starts immediately).
 * scroll-margin-top on sections keeps content below the fixed header.
 */
export function scrollToId(id: string): void {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}
