// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import teng from './English/Translate.json';
import tsom from './Somali/Translate.json';

const i18 = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: teng,
      },
      so: {
        translation: tsom,
      },
    },
    lng: 'so',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Use a separate function to change the language
export const changeLanguage = (lng) => {
  return i18.changeLanguage(lng);
};

// Assign the changeLanguage function to i18n
i18.changeLanguage = changeLanguage;

export default i18;
