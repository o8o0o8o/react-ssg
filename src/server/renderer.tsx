import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import App from "../client/App/App";
import { renderRoutes } from "react-router-config";

import { ServerStyleSheet } from "styled-components";
import routes from "../shared/routes";

export default (req: express.Request) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
        <App />
        {renderRoutes(routes)}
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();

  return `<html lang="en">
  <head>
  <base href="/" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SSG</title>
    ${styles}
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/client/client.js"></script>
    <script type="module" src="/client/runtime.js"></script>
    <script type="module" src="/client/vendor.js"></script>
  </body>
</html>`;
};
