import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import es from './locales/es.json';

const i18n = new I18n({
  en,
  es,
});

const languageCode = Localization.getLocales()[0].languageCode || 'en'

i18n.defaultLocale = 'en';
i18n.locale = languageCode;
i18n.enableFallback = true;

export default i18n;