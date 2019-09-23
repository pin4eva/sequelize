const Sequelize = require("sequelize");
const db = require("../../db/database");
const bcrypt = require("bcryptjs");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

const Post = db.define(
  "post",
  {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  { paranoid: true }
);
// User.associations = models => {

// };
User.hasMany(Post);
Post.belongsTo(User);

// Post.associations = models => {
// };
module.exports = {
  User,
  Post
};
