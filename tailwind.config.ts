/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./content/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#000000",
                surface: "#0d0d0d",
                "surface-2": "#141414",
                border: "rgba(255,255,255,0.10)",
                "border-hover": "rgba(255,255,255,0.22)",
                text: "#EDEDED",
                muted: "#9A9A9A",
                teal: {
                    DEFAULT: "#2DD4BF",
                    dim: "rgba(45,212,191,0.15)",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            screens: {
                xs: "480px",
            },
            scrollMarginTop: {
                nav: "80px",
            },
        },
    },
    plugins: [],
};
