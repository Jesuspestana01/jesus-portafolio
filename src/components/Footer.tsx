import { socialMedia } from "../data/socialMediaIcons";

export const Footer = () => {
    const footerLinks = [
        { name: 'About me', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <footer className="flex flex-col items-center justify-around w-full py-16 text-sm backdrop-blur-lg border-t transition-colors duration-300 bg-white/70 border-[#D1DFDC] text-slate-600 dark:bg-neutral-950/20 dark:border-white/5 dark:text-zinc-100">
            <div className="flex items-center gap-8">
                {footerLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 font-medium transition-all text-[#0F2625] dark:text-white">
                        {link.name}
                        <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-emerald-600 dark:bg-emerald-400" />
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-6 mt-8 text-slate-500 dark:text-zinc-400">
                {socialMedia.map((icon, index) => (
                    <a aria-label={icon.title} key={index} href={icon.link} className="transition-all duration-300 hover:-translate-y-1 hover:text-emerald-600 dark:hover:text-emerald-400">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={icon.d} />
                        </svg>
                    </a>
                ))}
            </div>

            <p className="mt-8 text-center text-slate-500 dark:text-zinc-500">
                Made by <span className="text-[#0F2625] dark:text-zinc-300">Jesús Pestana</span>.
            </p>
        </footer>
    );
};