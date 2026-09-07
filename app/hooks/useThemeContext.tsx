import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
  children,
}: PropsWithChildren) => {

  const { colorScheme, setColorScheme } = useColorScheme();

  const [themeMode, setThemeModeState] =
    useState<ThemeMode>(
      colorScheme === "dark" ? "dark" : "light"
    );

  const [ready, setReady] = useState(false);

  useEffect(() => {

    const loadSavedTheme = async () => {
      try {

        const savedTheme =
          await AsyncStorage.getItem("theme");

        if (
          savedTheme === "light" ||
          savedTheme === "dark"
        ) {

          setThemeModeState(savedTheme);
          setColorScheme(savedTheme);

        } else {

          const initialTheme =
            colorScheme === "dark"
              ? "dark"
              : "light";

          setThemeModeState(initialTheme);
          setColorScheme(initialTheme);

        }

      } catch (error) {

        console.warn(
          "Error loading theme:",
          error
        );

      } finally {

        setReady(true);

      }
    };

    loadSavedTheme();

  }, []);

  const setThemeMode = async (
    mode: ThemeMode
  ) => {

    setThemeModeState(mode);

    setColorScheme(mode);

    try {

      await AsyncStorage.setItem(
        "theme",
        mode
      );

    } catch (error) {

      console.warn(
        "Error saving theme:",
        error
      );

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

  const context =
    useContext(ThemeContext);

  if (!context) {

    throw new Error(
      "useThemeMode must be used inside ThemeProvider"
    );

  }

  return context;

};