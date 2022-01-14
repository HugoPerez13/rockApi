const { body, validationResult } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "createUser": {
      return [
        body("email", "Invalid email").exists().isEmail(),
        body("password", "Invalid password").isLength({ min: 6 }),
      ];
    }
  }
};

module.exports = { validate };