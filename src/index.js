// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import store, { persistor } from "./app/store";
import "./styles/tailwind.css";
import { ThemeProvider } from "./context/ThemeContext";
import { setupAxiosInterceptors } from "./middleware/axiosInterceptor";

setupAxiosInterceptors();

if (process.env.NODE_ENV === "production") {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    for (let [key, value] of Object.entries(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    )) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
        typeof value === "function" ? () => {} : null;
    }
  }
}

if (process.env.NODE_ENV === "production") {
  // Disable all console.* logs in production
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
