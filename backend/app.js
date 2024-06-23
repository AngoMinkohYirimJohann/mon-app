const express = require("express");
const cors = require("cors");
const userRoute = require("./api/auth");
const db = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRoute);

module.exports = app;
