const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDb = process.env.MONGO_DB;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(
      `conectado a la base de datos: ${name} en el servidor: ${host}`
    );
  } catch (error) {
    console.log(`no se ha podido conectar a la base de datos`, error);
  }
};

module.exports = { connect };