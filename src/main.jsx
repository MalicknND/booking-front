// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { HelmetProvider } from "react-helmet-async";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HelmetProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HelmetProvider>
  // </React.StrictMode>
);
