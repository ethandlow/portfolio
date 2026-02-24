"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/content/projects";

interface CaseStudyCardProps {
    project: Project;
    isFirst?: boolean;
}

export function CaseStudyCard({ project, isFirst = false }: CaseStudyCardProps) {
    const primaryLink = project.links?.[0];
    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;   // -0.5 to 0.5
        const dy = (e.clientY - cy) / rect.height;  // -0.5 to 0.5
        setOffset({ x: dx * 18, y: dy * 12 });       // max ±9px / ±6px
    }

    function handleMouseLeave() {
        setOffset({ x: 0, y: 0 });
    }

    return (
        <article className={`${!isFirst ? "border-t border-white/10" : ""} py-16`}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center">

                {/* ── Left: text blurb ── */}
                <div className="flex flex-col gap-4">
                    <p className="text-[#9a9a9a] text-xs tracking-wide">
                        {project.tags.join(" · ")}
                    </p>

                    <h3 className="text-3xl sm:text-4xl font-semibold text-[#ededed] tracking-tight leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-[#9a9a9a] text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* ── Right: single white cell, screenshot peeking from bottom (parallax) ── */}
                <a
                    href={primaryLink?.href}
                    target={primaryLink?.external ? "_blank" : undefined}
                    rel={primaryLink?.external ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-3xl"
                    aria-label={`Open ${project.title}`}
                    tabIndex={0}
                >
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative rounded-3xl bg-white shadow-[0_24px_48px_rgba(0,0,0,0.4)] overflow-hidden pt-1.5 px-5 sm:pt-2 sm:px-6"
                        style={{ minHeight: "220px" }}
                    >
                        {/* Image area — same cell, clips bottom */}
                        <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    priority
                                    className="object-cover object-top"
                                    style={{
                                        transform: `translate(${offset.x}px, calc(${offset.y}px + 24px))`,
                                        transition: "transform 0.12s ease-out",
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                                    <p className="text-neutral-400 text-xs font-mono">{project.title}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </a>

            </div>
        </article>
    );
}
