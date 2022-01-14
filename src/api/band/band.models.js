const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },

  yearsActive: {
    type: "string",
    requiere: true,
    trim: true,
  },

  albums: [
    {
      type: mongoose.Types.ObjectId,
      ref: "album",
    },
  ],
});
const Band = mongoose.model("band", bandSchema);
module.exports = Band;
