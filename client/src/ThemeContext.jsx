import { createContext, useContext, useState, useEffect } from "react";

// Create context
const ThemeContext = createContext();

// Hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider component
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved theme from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
