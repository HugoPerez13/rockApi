const albumRoute = require("express").Router();
const { createAlbum, getAlbum } = require("./album.controller");
//const { validate } = require("../../utils/validator/validator");

albumRoute.get("/", getAlbum);

albumRoute.post("/create", createAlbum);

module.exports = albumRoute;