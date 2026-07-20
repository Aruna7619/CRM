import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { TemplateProvider } from "./context/TemplateContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <TemplateProvider>

        <App />

      </TemplateProvider>

    </BrowserRouter>

  </React.StrictMode>

);