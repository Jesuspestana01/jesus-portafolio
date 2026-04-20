import { useEffect, useState } from "react";

export const Navbar = () => {
    const navLinks = [
        { name: 'About me', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-center px-16 transition-all duration-500 z-50 
            ${isScrolled 
                ? "py-6 backdrop-blur-lg shadow-md bg-white/70 border-b border-[#D1DFDC] dark:bg-neutral-950/20 dark:border-white/5" 
                : "py-5 bg-transparent"}`}>
            <div className="flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 font-medium transition-colors text-[#0F2625] dark:text-white">
                        {link.name}
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-emerald-600 dark:bg-emerald-400" />
                    </a>
                ))}
            </div>
        </nav>
    );
};