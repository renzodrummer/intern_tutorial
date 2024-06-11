const express = require("express");
const route = express.Router();

// database
const db = require("./config/db.config");

// controllers
const {
  createUser,
  getUser,
  getOneUser,
} = require("./controller/user.controller");
const {
  validator,
  validateCreateUser,
} = require("./middleware/create.user.validate");

route.get("/getuser", getUser);

route.get("/get/one/:id", getOneUser);

route.post("/create/user", validator.body(validateCreateUser), createUser);

route.get("/db", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    res.send("Connection has been established successfully.");
  } catch (error) {
    res.send(error);
  }
});

module.exports = route;
