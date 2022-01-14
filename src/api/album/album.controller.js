const Album = require("./album.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const createAlbum = async (req, res, next) => {
  try {
    const body = req.body;
    
  } catch (err) {
    return next(err);
  }
};

const getAlbum = async (req, res, next) => {
  try {
    const album = await Album.find();
    if (!album) {
      console.log("error al buscar los usuarios");
    }
    res.status(200).json({ album });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createAlbum,
  getAlbum,
};
