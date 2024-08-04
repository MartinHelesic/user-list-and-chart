import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { store } from "./redux/store";
import App from "./App";
import getTheme from "./styles/getTheme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={getTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
