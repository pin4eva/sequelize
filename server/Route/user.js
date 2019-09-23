const express = require("express");
const router = express.Router();
const { User } = require("../sequelize");
require("sequelize").Sequelize;

router.post("/new", async (req, res) => {
  await User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/", async (req, res) => {
  await User.findAll()
    .then(users => res.send(users))
    .catch(err => res.send(err));
});
module.exports = router;
