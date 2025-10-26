import { configureStore } from "@reduxjs/toolkit";
import { textApi } from "../api/textApi";

export const store = configureStore({
  reducer: {
    // Подключаем reducer из textApi для работы с API
    [textApi.reducerPath]: textApi.reducer,
  },
  // Добавляем middleware для работы с RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(textApi.middleware),
});

// Типы для удобства типов
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
