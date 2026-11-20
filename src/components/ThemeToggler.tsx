import { useCallback, useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      document.documentElement.classList.toggle("dark", nextMode);
      localStorage.setItem("theme", nextMode ? "dark" : "light");
      return nextMode;
    });
  }, []);

  return { isDarkMode, toggleDarkMode };
};
