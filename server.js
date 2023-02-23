
const { expressErrorHandler } = require("@appsignal/nodejs");
const express = require("express");
const { parse } = require("url");
const next = require("next");
 
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
 
app
  .prepare()
  .then(() => {
    express()
      .use(handle)
      .use(expressErrorHandler())
      .listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
