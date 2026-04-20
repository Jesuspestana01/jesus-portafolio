import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const config = document.documentElement.classList;
    if (config.contains("dark")) {
      config.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      config.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!theme) return <div className="w-9 h-9"></div>;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md transition-all duration-300"
    >
      {/* Icono Sol */}
      <svg className={`w-5 h-5 transition-all duration-500 ${theme === 'light' ? 'block text-amber-500' : 'hidden'}`}
           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      {/* Icono Luna */}
      <svg className={`w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'block text-emerald-400' : 'hidden'}`}
           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
};