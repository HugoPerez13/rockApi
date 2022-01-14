const bandRoute = require("express").Router();
const { createBand, getBand } = require("./band.controller");
//const { validate } = require("../../utils/validator/validator");

bandRoute.get("/", getBand);

bandRoute.post("/create", createBand);

module.exports = bandRoute;