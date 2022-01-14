const Band = require("./band.models");




const createBand = async (req, res, next) => {
    try {
      const band = new Band({
        name: req.body.name,
        yearsActive: req.body.yearsActive,
        albums: req.body.albums,
      });
      band.save().then(() => {
        res.status(201).json({
          message: "Band upload",
        });
      });
    } catch (err) {
      return next(err);
    }
  };

const getBand = async (req, res, next) => {
  try {
    const band = await Band.find().populate("albums");
    if (!band) {
      console.log("error al buscar la banda");
    }
    res.status(200).json({ band });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createBand,
  getBand,
};