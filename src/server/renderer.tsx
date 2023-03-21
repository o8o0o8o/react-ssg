import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import App from "../client/App/App";
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

export default (req: express.Request) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
      {renderRoutes(routes)}
    </StaticRouter>
  );

  return `<html lang="en">
  <head>
  <base href="/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SSG</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/client/client.js"></script>
    <script type="module" src="/client/runtime.js"></script>
    <script type="module" src="/client/vendor.js"></script>
  </body>
</html>`;
};
