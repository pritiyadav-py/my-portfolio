import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../theme/colors";

const ThemeContext = createContext();

// A helper function to check if a theme name is valid
const isThemeValid = (themeName) => themes.some((t) => t.name === themeName);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    // If the stored theme is valid, use it. Otherwise, default to the first theme in the list.
    return isThemeValid(storedTheme) ? storedTheme : themes[0].name;
  });

  useEffect(() => {
    // This logic is now safer because we know 'theme' is always valid.
    const selectedTheme = themes.find((t) => t.name === theme);
    const mode = darkMode ? "dark" : "light";
    const colors = selectedTheme.colors[mode];

    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-text', colors.text);

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("theme", theme);

  }, [darkMode, theme]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);