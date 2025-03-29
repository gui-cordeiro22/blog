// Dependencies
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import { App } from "./App.js";

createRoot(document.getElementById("root") as any).render(
  <StrictMode>
    <App />
  </StrictMode>
);
