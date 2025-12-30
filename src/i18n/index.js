import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from './locales/ru/common.json';
import uk from './locales/uk/common.json';

export const RU_LANG_CODE = 'ru';
export const UK_LANG_CODE = 'uk';

const options = {
  resources: {
    ru: { translation: ru },
    uk: { translation: uk },
  },
  lng: localStorage.getItem('lang') || UK_LANG_CODE,
  fallbackLng: UK_LANG_CODE,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;