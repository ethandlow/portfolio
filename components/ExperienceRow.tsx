import { Experience } from "@/content/experience";

interface ExperienceTableRowProps {
    experience: Experience;
}

export function ExperienceTableRow({ experience }: ExperienceTableRowProps) {
    return (
        <tr className="group border-t border-white/10">
            {/* Client */}
            <td className="py-2 pr-8 align-top w-[17%]">
                <span className="text-[#ededed] text-sm">{experience.org}</span>
            </td>

            {/* Project */}
            <td className="py-2 pr-8 align-top">
                <span className="text-[#9a9a9a] text-sm leading-relaxed">{experience.project}</span>
            </td>

            {/* Platform */}
            <td className="py-2 pr-8 align-top w-[14%]">
                <span className="text-[#9a9a9a] text-sm">{experience.platform ?? ""}</span>
            </td>

            {/* Type */}
            <td className="py-2 align-top w-[12%]">
                <span className="text-[#9a9a9a] text-sm">{experience.type}</span>
            </td>
        </tr>
    );
}
