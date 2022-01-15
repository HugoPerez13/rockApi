const User = require("../../api/user/user.models");
const {setError} = require("../error/error")
const { verifyJwt, generateSing } = require("../jwt/jwt.utils");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
        return next(setError(404, "Unauthorize"));
    }
    /*const parserToken = token.replace("Bearer ", "");
    const validToken = verifyJwt(parserToken, process.env.JWT_SECRET);
    const userLogued = await User.findById(validToken.id);
    userLogued.password = null;
    req.user = userLogued;*/
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = { isAuth };
