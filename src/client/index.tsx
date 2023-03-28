import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import { renderRoutes } from "react-router-config";
import routes from "../shared/routes";

hydrate(
  <BrowserRouter>
    <App />
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
