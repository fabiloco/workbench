import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { WorkbenchApp } from "./WorkbenchApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkbenchApp />
  </React.StrictMode>
)
