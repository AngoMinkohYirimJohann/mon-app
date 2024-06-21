const express = require("express");
const cors = require("cors");
const auth = require("./api/user/auth");
const db = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", auth);

const PORT = process.env.PORT || 3000; // Définissez le port par défaut si PORT n'est pas défini dans l'environnement

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
