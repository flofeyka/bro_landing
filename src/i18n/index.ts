import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next) // подключаем react-i18next
  .init({
    lng: "ru",
    backend: {
      loadPath: `${import.meta.env.VITE_PUBLIC_API_URL}/text/{{lng}}`,
    },
      // resources: {
      //     en: { translation: en },
      //     ru: { translation: ru }
      // },
    fallbackLng: "ru", // язык по умолчанию
    interpolation: {
      escapeValue: false, // не экранируем строки
    },
  });

export default i18n;
