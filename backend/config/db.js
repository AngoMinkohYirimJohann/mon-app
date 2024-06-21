const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion à MongoDB :"));
db.once("open", () => {
  console.log("Connecté à MongoDB avec succès");
});
module.exports = db;
