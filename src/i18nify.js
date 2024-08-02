import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "../locales/en.json"
import ptTranslation from "../locales/pt.json"


const resources = {
    en: {
        translation: enTranslation,
    },
    pt: {
        translation: ptTranslation,
    },
}
const savedLanguage = localStorage.getItem("language:name");

i18n
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        }
    });

export default i18n;