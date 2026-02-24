"use client";

import { useState } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <nav
                className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
                aria-label="Main navigation"
            >
                {/* Logo / Name */}
                <a
                    href="#about"
                    className="text-[#ededed] font-medium text-sm tracking-wide hover:text-[#2dd4bf] transition-colors duration-200"
                >
                    Ethan Low
                </a>

                {/* Desktop nav */}
                <ul className="hidden sm:flex items-center gap-8" role="list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-[#9a9a9a] text-sm hover:text-[#ededed] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="sm:hidden text-[#9a9a9a] hover:text-[#ededed] transition-colors duration-200 p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="sm:hidden bg-black/95 border-t border-white/10 px-6 py-4">
                    <ul className="flex flex-col gap-4" role="list">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-[#9a9a9a] text-sm hover:text-[#ededed] transition-colors duration-200 block py-1"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
