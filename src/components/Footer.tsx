import { socialMedia } from "../data/socialMediaIcons";

export const Footer = () => {
    const footerLinks = [
        { name: 'About me', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <footer className="text-zinc-100 flex flex-col items-center justify-around w-full py-16 text-sm bg-neutral-950/20 backdrop-blur-lg border-t border-white/5">
            <div className="flex items-center gap-8">
                {footerLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group flex flex-col gap-0.5 text-white font-medium transition-all">
                        {link.name}
                        <div className="bg-emerald-400 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-6 mt-8 text-zinc-400">
                {socialMedia.map((icon, index) => (
                    <a aria-label={icon.title} key={index} href={icon.link} className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={icon.d} />
                        </svg>
                    </a>
                ))}
            </div>

            <p className="mt-8 text-center text-zinc-500">
                Made by <span className="text-zinc-300">Jesús Pestana</span>.
            </p>
        </footer>
    );
};