const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const { Router } = require("express");

route.post("/api/registerUser", controller.registerUser);
module.exports = route;
