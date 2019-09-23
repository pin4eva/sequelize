const Sequelize = require("sequelize");
const db = require("../../db/database");

const Post = db.define("post", {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});

Post.associations = models => {
  Post.belongsTo(models.User);
};

module.exports = Post;
