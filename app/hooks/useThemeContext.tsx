import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const systemScheme = useColorScheme();

  const [themeMode, setThemeModeState] = useState<ThemeMode>(
    systemScheme === "dark" ? "dark" : "light"
  );

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadSavedTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");

        if (savedTheme === "light" || savedTheme === "dark") {
          setThemeModeState(savedTheme);
        }
      } catch (error) {
        console.warn("Error loading theme:", error);
      } finally {
        setReady(true);
      }
    };

    loadSavedTheme();
  }, []);

  const setThemeMode = async (mode: ThemeMode) => {
    setThemeModeState(mode);

    try {
      await AsyncStorage.setItem("theme", mode);
    } catch (error) {
      console.warn("Error saving theme:", error);
    }
  };

  if (!ready) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeMode must be used inside ThemeProvider"
    );
  }

  return context;
};