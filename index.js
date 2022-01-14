const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const cors =require("cors");
//const jwt = require("jsonwebtoken");
dotenv.config;
const userRoute = require("./src/api/user/user.routes");
const albumRoute = require("./src/api/album/album.routes");
const bandRoute = require("./src/api/band/band.routes");
const { connect } = require("./src/utils/database/db");

app = express();

connect();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const PORT = process.env.PORT || 8000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", userRoute);
app.use("/api/albums", albumRoute);
app.use("/api/band", bandRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});