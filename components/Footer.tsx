export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 mt-24 py-10">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[#9a9a9a] text-sm">
                    © {year} Ethan Low. Built with Next.js.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9a9a9a] text-sm hover:text-[#ededed] transition-colors duration-200"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9a9a9a] text-sm hover:text-[#ededed] transition-colors duration-200"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </div>
        </footer>
    );
}
