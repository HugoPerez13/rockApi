const Album = require("./album.models");




const createAlbum = async (req, res, next) => {
    try {
      const album = new Album({
        name: req.body.name,
        photoAlbum: req.body.photoAlbum,
      });
      if (req.file){
          album.photoAlbum = req.file.path
      }
      album.save().then(() => {
        res.status(201).json({
          message: "Album upload",
        });
      });
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
