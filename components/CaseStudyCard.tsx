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

                    {primaryLink && (
                        <a
                            href={primaryLink.href}
                            target={primaryLink.external ? "_blank" : undefined}
                            rel={primaryLink.external ? "noopener noreferrer" : undefined}
                            className="mt-2 inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-[#9a9a9a] hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-200"
                            aria-label={`Visit ${project.title}`}
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <path d="M3 11L11 3M11 3H5M11 3V9" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* ── Right: framed screenshot with parallax ── */}
                <a
                    href={primaryLink?.href}
                    target={primaryLink?.external ? "_blank" : undefined}
                    rel={primaryLink?.external ? "noopener noreferrer" : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
                    aria-label={`Open ${project.title}`}
                    tabIndex={0}
                >
                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden flex items-center justify-center p-8 sm:p-12"
                        style={{ minHeight: "300px" }}
                    >
                        {/* Subtle radial glow behind the image */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,212,191,0.05) 0%, transparent 70%)",
                            }}
                            aria-hidden="true"
                        />

                        {/* The screenshot — floats and parallaxes on hover */}
                        <div
                            className="relative w-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px)`,
                                transition: "transform 0.12s ease-out",
                            }}
                        >
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    width={960}
                                    height={600}
                                    className="w-full h-auto rounded-xl"
                                    priority
                                />
                            ) : (
                                <div className="aspect-[16/10] bg-white/[0.04] rounded-xl flex items-center justify-center">
                                    <p className="text-white/20 text-xs font-mono">{project.title}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </a>

            </div>
        </article>
    );
}
