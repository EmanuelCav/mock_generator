import { I18n } from "i18n-js";
import * as Localization from "expo-localization";

import en from "./locales/en.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";

const i18n = new I18n({
  en,
  es,
  de,
  fr,
  pt
});

i18n.defaultLocale = "en";
i18n.enableFallback = true;

const deviceLanguage = Localization.getLocales()[0]?.languageCode;

i18n.locale = deviceLanguage && i18n.translations[deviceLanguage] ? deviceLanguage : "en";

export default i18n;