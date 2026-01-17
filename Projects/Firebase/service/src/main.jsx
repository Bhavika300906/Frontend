import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ServiceProvider } from "./context/ServiceContext";

/* 🔔 Toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ServiceProvider>
      <App />
      <ToastContainer position="top-right" autoClose={2000} />
    </ServiceProvider>
  </React.StrictMode>
);
