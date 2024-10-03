import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import {store} from './redux/store.js';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
