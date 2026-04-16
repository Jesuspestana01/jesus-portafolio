export const Footer = () => {
    const footerLinks = [
        { name: 'About me', path: '#about-me' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const socialMedia = [
        {
            title: "Instagram",
            link: "https://www.instagram.com/j_pestana01",
            d: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5 M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
        },
        {
            title: "LinkedIn",
            link: "https://ve.linkedin.com/in/jpestana01?original_referer=https%3A%2F%2Fwww.linkedin.com%2F",
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        },
        {
            title: "Github",
            link: "https://github.com/Jesuspestana01",
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4 M9 18c-4.51 2-5-2-7-2"
        }
    ]

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
                    <a key={index} href={icon.link} className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
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