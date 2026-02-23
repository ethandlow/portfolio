import { ReactNode } from "react";

interface SectionContainerProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
    return (
        <section id={id} className={`max-w-5xl mx-auto px-6 ${className}`}>
            {children}
        </section>
    );
}
