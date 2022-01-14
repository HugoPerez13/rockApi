const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config;

const { connect } = require("./db");

app = express();

connect();

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});