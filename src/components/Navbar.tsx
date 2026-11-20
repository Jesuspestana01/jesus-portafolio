import { useEffect, useState } from "react";
import { useDarkMode } from "./ThemeToggler";
import { ui, type Lang } from "../i18n/ui";

export const Navbar = ({ lang }: { lang: Lang }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const t = ui[lang];

  const navLinks = [
    { label: t["nav.experience"], href: "#experience" },
    { label: t["nav.projects"], href: "#projects" },
    { label: t["nav.capabilities"], href: "#capabilities" },
    { label: t["nav.contact"], href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const persistLang = (target: Lang) => {
    try {
      localStorage.setItem("lang", target);
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? "border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="h-16 flex items-center justify-between gap-4">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            Jesús Pestana
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div
              className="inline-flex items-center border border-[var(--border)] rounded-md bg-[var(--surface)] px-1 py-0.5 font-mono text-xs"
              role="group"
              aria-label="Language switcher"
            >
              {lang === "es" ? (
                <span className="px-2 py-1 text-[var(--ink)] font-semibold" aria-current="true">
                  ES
                </span>
              ) : (
                <a
                  href="/es/"
                  onClick={() => persistLang("es")}
                  className="px-2 py-1 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  ES
                </a>
              )}
              <span className="text-[var(--border-strong)] select-none" aria-hidden="true">
                /
              </span>
              {lang === "en" ? (
                <span className="px-2 py-1 text-[var(--ink)] font-semibold" aria-current="true">
                  EN
                </span>
              ) : (
                <a
                  href="/en/"
                  onClick={() => persistLang("en")}
                  className="px-2 py-1 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  EN
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)] text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            >
              {/* Sun icon visible in dark mode */}
              <svg
                className="hidden dark:block w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              {/* Moon icon visible in light mode */}
              <svg
                className="block dark:hidden w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Compact mobile editorial strip */}
        <nav
          aria-label="Mobile navigation"
          className="md:hidden flex items-center justify-between gap-2 py-2.5 border-t border-[var(--border)] font-mono text-[11px] uppercase tracking-wider text-[var(--ink-secondary)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--ink)] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
