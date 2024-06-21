const express = require("express");
const cors = require("cors");
const route = require("./router/route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", route);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`serveur sur le port ${PORT}`);
});
