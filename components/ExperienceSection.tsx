"use client";

import { useState, useCallback } from "react";
import { Experience } from "@/content/experience";
import { ExperienceTableRow } from "@/components/ExperienceRow";
import { scrollToId } from "@/lib/scroll";

const PER_PAGE = 10;
const ROW_HEIGHT_PX = 40;
const TABLE_HEADER_PX = 44;
const PAGINATION_PX = 56;
const FADE_MS = 150;

/** Fixed height so pagination never moves: header + full page of rows + pagination + buffer */
const FIXED_BLOCK_HEIGHT =
    TABLE_HEADER_PX + PER_PAGE * ROW_HEIGHT_PX + PAGINATION_PX + 24;

interface ExperienceSectionProps {
    experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const [page, setPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const totalPages = Math.ceil(experiences.length / PER_PAGE) || 1;
    const start = (page - 1) * PER_PAGE;
    const paginated = experiences.slice(start, start + PER_PAGE);


    const goToPage = useCallback(
        (p: number) => {
            if (p === page || p < 1 || p > totalPages) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setPage(p);
                scrollToId("experience");
                setTimeout(() => setIsTransitioning(false), FADE_MS);
            }, FADE_MS);
        },
        [page, totalPages]
    );

    return (
        <div
            className="relative overflow-hidden"
            style={{
                height: totalPages > 1 ? FIXED_BLOCK_HEIGHT : undefined,
                minHeight: totalPages > 1 ? FIXED_BLOCK_HEIGHT : undefined,
            }}
        >
            <div
                className={`transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th scope="col" className="pb-2 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[18%]">Client</th>
                            <th scope="col" className="pb-2 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider">Project</th>
                            <th scope="col" className="pb-2 pr-8 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[30%]">Platform</th>
                            <th scope="col" className="pb-2 text-left text-xs text-[#9a9a9a] font-normal tracking-wider w-[20%]">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map((exp) => (
                            <ExperienceTableRow key={exp.id} experience={exp} />
                        ))}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="absolute bottom-0 right-0 flex justify-end gap-1 pt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            type="button"
                            onClick={() => goToPage(p)}
                            disabled={isTransitioning}
                            className={`min-w-[2rem] h-8 px-2 rounded text-sm font-medium transition-colors ${
                                p === page
                                    ? "bg-[#2dd4bf] text-black"
                                    : "text-[#9a9a9a] hover:text-[#ededed] hover:bg-white/10"
                            }`}
                            aria-label={`Page ${p}`}
                            aria-current={p === page ? "page" : undefined}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
