import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from './locales/ru/common.json';
import ua from './locales/ua/common.json';

export const RU_LANG_CODE = 'ru';
export const UA_LANG_CODE = 'ua';

const options = {
  resources: {
    ru: { translation: ru },
    ua: { translation: ua },
  },
  lng: localStorage.getItem('lang') || UA_LANG_CODE,
  fallbackLng: UA_LANG_CODE,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;