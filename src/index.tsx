import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppTheme from "./AppTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppTheme>
    <App />
  </AppTheme>
);
