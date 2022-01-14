const userRoute = require("express").Router();
const { createUser, login, logout, getUser } = require("./user.controller");
const { validate } = require("../../utils/validator/validator");

userRoute.get("/", getUser);

userRoute.post("/register", validate("createUser"), createUser);
userRoute.post("/login", login);

module.exports = userRoute;