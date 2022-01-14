const albumRoute = require("express").Router();
const { createAlbum, getAlbum } = require("./album.controller");
const upload = require("../../utils/middlewares/file");

albumRoute.get("/", getAlbum);

albumRoute.post("/create", upload.single("photoAlbum"), createAlbum);

module.exports = albumRoute;