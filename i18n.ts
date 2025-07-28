import { I18n } from 'i18n-js';
import en from './locales/en.json';
import es from './locales/es.json';
import { autorun } from 'mobx';
import * as Localization from 'expo-localization';

import { userStore } from './app/store/user.store';

const i18n = new I18n({
  en,
  es,
});

i18n.defaultLocale = 'en';
i18n.locale = Localization.getLocales()[0].languageCode || 'en';
i18n.enableFallback = true;

autorun(() => {
  i18n.locale = userStore.lang;
});

export default i18n;
