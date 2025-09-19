import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
    .use(LanguageDetector) // Автоматически определяет язык пользователя
    .use(initReactI18next) // подключаем react-i18next
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru }
        },
        fallbackLng: 'en', // язык по умолчанию
        interpolation: {
            escapeValue: false // не экранируем строки
        }
    });

export default i18n;
