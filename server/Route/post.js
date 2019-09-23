const express = require("express");
const router = express.Router();
const { Post } = require("../sequelize");

router.post("/new", async (req, res) => {
  await Post.create(req.body)
    .then(post => res.send({ success: true, post }))
    .catch(err => res.send({ success: false, err }));
});

module.exports = router;
