const express = require("express");
const router = express.Router();
// const { Post } = require("../sequelize");
// const Post = require("../Models/Post");
// const User = require("../Models/User")
const { User, Post } = require("../Models/PostUser");
router.post("/new", async (req, res) => {
  await Post.create(req.body)
    .then(post => res.send(post))
    .catch(err => res.send(err));
});
router.get("/user/:userId", async (req, res) => {
  await Post.findAll({
    include: [{ model: User, where: { id: req.params.userId } }]
  })
    .then(posts => res.send(posts))
    .catch(err => {
      res.send(err);
    });
});
router.get("/", async (req, res) => {
  await Post.findAll()
    .then(posts => res.send(posts))
    .catch(err => res.send(err));
});
module.exports = router;
