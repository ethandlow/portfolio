"use client";

import { useState } from "react";
import { Experience } from "@/content/experience";
import { ExperienceTableRow } from "@/components/ExperienceRow";
import { scrollToId } from "@/lib/scroll";

const PER_PAGE = 25;

interface ExperienceSectionProps {
    experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(experiences.length / PER_PAGE) || 1;
    const start = (page - 1) * PER_PAGE;
    const paginated = experiences.slice(start, start + PER_PAGE);

    return (
        <>
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

            {totalPages > 1 && (
                <div className="flex justify-end gap-1 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            type="button"
                            onClick={() => {
                                setPage(p);
                                scrollToId("experience");
                            }}
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
        </>
    );
}
