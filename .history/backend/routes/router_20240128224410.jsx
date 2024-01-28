const express = require("express");
const route = express.Router();
const controller = require("../controller/controller.jsx");
const { Router } = require("express");

route.post("/api/registerUser", controller.registerUser);
route.post("/api/loginUser", controller.loginUser);
route.post("api/forgotUser", controller.forgotUser);
module.exports = route;
