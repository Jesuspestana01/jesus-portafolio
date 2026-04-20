import { useEffect, useState } from "react";
import { useDarkMode } from "./ThemeToggler";
import { ui } from "../i18n/ui";

export const Navbar = ({ lang }: { lang: 'es' | 'en' }) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isScrolled, setIsScrolled] = useState(false);
    const t = ui[lang];

    const navLinks = [
        { name: t['nav.about'], path: '#about-me' },
        { name: t['nav.projects'], path: '#projects' },
        { name: t['nav.contact'], path: '#contact' },
    ];

    const langLink = lang === 'es' ? '/en/' : '/es/';
    const langLabel = lang === 'es' ? 'EN' : 'ES';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 transition-all duration-500 z-50 
            ${isScrolled
                ? "py-3 backdrop-blur-xl shadow-md bg-white/80 dark:bg-neutral-950/40"
                : "py-5 backdrop-blur-sm bg-white/20 dark:bg-black/10"}`}>
            <div className="hidden md:block w-[120px]"></div>
            <div className="flex items-center gap-4 md:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 font-medium transition-colors text-[#0F2625] dark:text-white text-[13px] md:text-base">
                        {link.name}
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-emerald-600 dark:bg-emerald-400" />
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-2 md:gap-4 md:w-[120px] justify-end">
                <a
                    href={langLink}
                    className="flex items-center justify-center w-10 h-10 text-xs font-bold border border-[#D1DFDC] dark:border-white/10 rounded-xl text-[#0F2625] dark:text-white hover:bg-emerald-500 hover:text-white transition-all bg-white/50 dark:bg-white/5 dark:hover:bg-white/10"
                >
                    {langLabel}
                </a>
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 bg-white/50 border-[#D1DFDC] text-[#0F2625] hover:bg-emerald-500 hover:text-white transition-all dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
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