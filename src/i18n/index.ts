import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import I18NextHttpBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next) // подключаем react-i18next
  .init({
    lng: "ru",
    backend: {
      loadPath: "http://localhost:3000/text/{{lng}}",
    },
    fallbackLng: "en", // язык по умолчанию
    interpolation: {
      escapeValue: false, // не экранируем строки
    },
  });

export default i18n;
