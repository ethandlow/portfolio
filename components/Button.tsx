interface ButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
    external?: boolean;
}

export function Button({ href, label, variant = "primary", external = false }: ButtonProps) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

    const styles =
        variant === "primary"
            ? "bg-[#2dd4bf] text-black font-medium hover:bg-[#25bba8] border border-transparent"
            : "bg-transparent text-[#ededed] border border-white/20 hover:border-white/40 hover:text-white";

    return (
        <a
            href={href}
            {...externalProps}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm transition-all duration-200 ${styles}`}
        >
            {label}
            {external && (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                >
                    <path d="M3.5 3.5H8.5M8.5 3.5V8.5M8.5 3.5L3.5 8.5" />
                </svg>
            )}
        </a>
    );
}
