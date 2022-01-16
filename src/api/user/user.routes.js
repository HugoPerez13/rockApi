const userRoute = require("express").Router();
const { createUser, login, logout, getUser } = require("./user.controller");
const { validate } = require("../../utils/validator/validator");
const {isAuth} =require("../../utils/middlewares/auth");
userRoute.get("/", getUser);

userRoute.get("/",[isAuth], getUser);
userRoute.post("/register", validate("createUser"), createUser);
userRoute.post("/login", login);

module.exports = userRoute;