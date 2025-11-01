import {configureStore} from "@reduxjs/toolkit";
import {textApi} from "../api/textApi";
import {authApi} from "../api/authApi.ts";

export const store = configureStore({
  reducer: {
    // Подключаем reducer из textApi для работы с API
    [textApi.reducerPath]: textApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Добавляем middleware для работы с RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(textApi.middleware).concat(authApi.middleware),
});

// Типы для удобства типов
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
