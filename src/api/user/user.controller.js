const User = require("./user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const createUser = async (req, res, next) => {
  try {
    const body = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const user = new User(body);
    user.password = await bcrypt.hash(user.password, 10);
    user.save();
    res.json(user);
  } catch (err) {
    return next(err);
  }
};

const login = async (req, res, next) => {
  const body = await req.body;
  try {
    User.findOne({ email: body.email }, (err, userDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err: err,
        });
      }
      if (!userDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "Usuario o contraseña incorrectos",
          },
        });
      }
      if (!bcrypt.compareSync(body.password, userDB.password)) {
        return res.status(400).json({
          ok: false,
          err: {
            message: "Usuario o contraseña incorrectos",
          },
        });
      }
      let token = jwt.sign(
        {
          email: userDB.email,
          userId: userDB._id,
        },
        "longer-secret-is-better",
        {
          expiresIn: "24h",
        }
      );
      res.json({
        ok: true,
        usuario: userDB,
        token,
      });
    });
  } catch (err) {
    return next(err);
  }
};

const logout = async (req, res, next) => {};

const getUser = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      console.log("error al buscar los usuarios");
    }
    res.status(200).json({ users });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createUser,
  login,
  logout,
  getUser,
};