import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ThemeProvider,
  ToasterComponent,
  ToasterProvider,
} from "@gravity-ui/uikit";

createRoot(document.getElementById("root")!).render(
  <div className="g-root">
    <ThemeProvider theme="dark">
      <ToasterProvider>
        <App />
        <ToasterComponent />
      </ToasterProvider>
    </ThemeProvider>
  </div>
);
