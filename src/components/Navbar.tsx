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
            setIsScrolled(window.scrollY > 10)
        };
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="h-20 overflow-y-scroll">
            <p className="w-10 h-[500px]"></p>
            <nav className={`fixed text-zinc-100 top-0 left-0 w-full flex items-center justify-center px-16 transition-all duration-500 z-50 ${isScrolled ? "bg-neutral-950/20 backdrop-blur-md shadow-md text-white-100 backdrop-blur-lg py-6" : "py-5"}`}>
                <div className="flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className="group flex flex-col gap-0.5 text-white">
                            {link.name}
                            <div className="bg-emerald-400 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
}
