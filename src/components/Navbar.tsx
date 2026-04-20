import { useEffect, useState } from "react";
import { useDarkMode } from "./ThemeToggler";

export const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'About me', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full grid grid-cols-3 items-center px-8 md:px-16 transition-all duration-500 z-50 
            ${isScrolled 
                ? "py-4 backdrop-blur-xl shadow-md bg-white/80 dark:bg-neutral-950/40" 
                : "py-5 backdrop-blur-sm bg-white/20 dark:bg-black/10"}`}>
            <div className="hidden md:block"></div>
            <div className="flex items-center justify-center gap-8 col-span-2 md:col-span-1">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 font-medium transition-colors text-[#0F2625] dark:text-white text-sm md:text-base">
                        {link.name}
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-emerald-600 dark:bg-emerald-400" />
                    </a>
                ))}
            </div>
            <div className="flex justify-end">
                <button 
                    onClick={toggleDarkMode}
                    className="p-2.5 rounded-xl border transition-all duration-300 bg-white/50 border-[#D1DFDC] text-[#0F2625] hover:bg-emerald-50 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 18v1m9-9h1M3 9h1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};