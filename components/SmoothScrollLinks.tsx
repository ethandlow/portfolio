"use client";

import { useEffect } from "react";
import { scrollToId } from "@/lib/scroll";

/**
 * Intercepts clicks on in-page hash links and scrolls with easing.
 * Mount once in layout so all #section links (nav, buttons, etc.) get smooth scroll.
 */
export function SmoothScrollLinks() {
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const target = (e.target as HTMLElement).closest("a[href^='#']");
            if (!target) return;
            const href = (target as HTMLAnchorElement).getAttribute("href");
            if (!href || href === "#") return;
            const id = href.slice(1);
            if (!id) return;
            const el = document.getElementById(id);
            if (!el) return;
            e.preventDefault();
            scrollToId(id);
            window.history.pushState(null, "", href);
        }
        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, []);
    return null;
}
