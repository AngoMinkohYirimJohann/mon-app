"use strict";

const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const db = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Serveur en écoute");
});
