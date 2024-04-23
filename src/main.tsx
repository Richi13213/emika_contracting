import React from "react";
import ReactDOM from "react-dom/client";
import { globals } from "@styles/globals";
import { Global } from "@emotion/react";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globals} />
    <App />
  </React.StrictMode>
);