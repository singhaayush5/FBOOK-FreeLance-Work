const express = require("express");
const route = express.Router();
const controller = require("../controller/controller.jsx");
const { Router } = require("express");
router.get("/afterUser", Authenticate, (req, res) => {
  res.send(req.rootUser);
});
route.post("/api/registerUser", controller.registerUser);
route.post("/api/loginUser", controller.loginUser);
route.post("/api/forgotUser", controller.forgotUser);
route.patch("/api/editUser", controller.editUser);

module.exports = route;
