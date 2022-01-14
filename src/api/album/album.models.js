const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
/*photoAlbum:{
    type: "string",
    required: true,
    trim: true,
}*/
 
});
const Album = mongoose.model("album", albumSchema);
module.exports = Album;
