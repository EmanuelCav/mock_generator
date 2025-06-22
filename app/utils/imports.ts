import { Faker, es, en, fr, de } from '@faker-js/faker';

const locales: Record<string, any> = {
    en,
    es,
    fr,
    de
}

export const getFaker = (locale: string = 'en') => {
    const selectedLocale = locales[locale] || en
    return new Faker({ locale: selectedLocale })
}
