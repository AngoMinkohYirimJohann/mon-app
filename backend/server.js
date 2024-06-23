const http = require("http");
const app = require("./app");

app.set("port", process.env.PORT);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("Serveur en écoute sur le port : " + process.env.PORT);
});
