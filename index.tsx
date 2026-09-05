import { registerRootComponent } from "expo";

import App from "./App";

import { LanguageProvider } from "./app/hooks/useLanguageContext";
import { ThemeProvider } from "./app/hooks/useThemeContext";

const Root = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  );
};

registerRootComponent(Root);