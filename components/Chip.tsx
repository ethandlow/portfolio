interface ChipProps {
    label: string;
    variant?: "default" | "teal";
}

export function Chip({ label, variant = "default" }: ChipProps) {
    const styles =
        variant === "teal"
            ? "bg-[rgba(45,212,191,0.12)] text-[#2dd4bf] border border-[rgba(45,212,191,0.25)]"
            : "bg-white/5 text-[#9a9a9a] border border-white/10";

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
            {label}
        </span>
    );
}
