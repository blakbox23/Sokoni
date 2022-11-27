import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/productsContext/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
);
