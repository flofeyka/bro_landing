import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./lib/store/store.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <ToastContainer />
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
