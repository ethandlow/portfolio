"use client";

import { useEffect } from "react";

/**
 * Observes every section[id] on the page.
 * - Adds "section-visible" only once the user has scrolled 50% into the section (fade in).
 * - Removes "section-visible" when visibility drops below 50% (fade out to black).
 * Each section stands on its own in the experience.
 */
export function ScrollFadeObserver() {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id]"));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                    } else {
                        entry.target.classList.remove("section-visible");
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
