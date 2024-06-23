"use strict";

const http = require("http");
const app = require("./index");

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("Serveur en écoute");
});
