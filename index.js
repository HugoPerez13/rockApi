const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//const jwt = require("jsonwebtoken");
dotenv.config;
const userRoute = require("./src/api/user/user.routes");
const { connect } = require("./src/utils/database/db");

app = express();

connect();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});