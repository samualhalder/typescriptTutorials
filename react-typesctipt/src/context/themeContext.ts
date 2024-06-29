import { createContext, useContext } from "react";

// Define the Theme type
export type Theme = "light" | "dark";

// Define the interface for the ThemeContext
interface ThemeType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the ThemeContext with a default value
export const ThemeContext = createContext<ThemeType>({
  theme: "light",
  toggleTheme: () => {},
});

// Define the ThemeContextProvider component
export  const ThemeContextProvider=ThemeContext.Provider
// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
