import { useCallback, useEffect, useState } from "react"

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        const initialMode = savedTheme ? savedTheme === 'dark' : prefersDark;
        
        setIsDarkMode(initialMode);
        
        if (initialMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            const html = document.documentElement;
            if (newMode) {
                html.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                html.classList.remove("dark");
                localStorage.setItem("theme", "light")
            }
            return newMode;
        })
    }, [])

    return { isDarkMode, toggleDarkMode }
}