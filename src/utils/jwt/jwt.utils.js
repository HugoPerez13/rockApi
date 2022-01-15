const jwt = require("jsonwebtoken");

const generateSing = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateSing,
  verifyJwt,
};