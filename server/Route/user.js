const express = require("express");
const router = express.Router();
// const { User } = require("../sequelize");
// require("sequelize").Sequelize;
const { User, Post } = require("../Models/PostUser");

router.post("/new", async (req, res) => {
  await User.create({
    username: req.body.username,
    password: req.body.password
  })
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

router.get("/:userId", async (req, res) => {
  await User.findOne({ id: req.params.id, include: [{ model: Post }] })
    .then(user => res.send(user))
    .catch(err => res.send(err));
});
module.exports = router;
