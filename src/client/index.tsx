import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import { renderRoutes } from "react-router-config";
import Home from "../pages/Home";
import About from "../pages/About";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
];

hydrate(
  <BrowserRouter>
    <App />
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById("root")
);
