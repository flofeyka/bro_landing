import { configureStore } from "@reduxjs/toolkit";
import { textApi } from "../api/textApi";
import { authApi } from "../api/authApi.ts";
import { appApi } from "../api/appApi.ts";

export const store = configureStore({
  reducer: {
    [textApi.reducerPath]: textApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(textApi.middleware)
      .concat(authApi.middleware)
      .concat(appApi.middleware),
});

// Типы для удобства типов
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
