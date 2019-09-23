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
    allowNull: false,
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
  // posts: {
  //   type: Sequelize.ARRAY,
  //   references: {
  //     model: db.models.Post,
  //     key:"id"
  //   }
  // }
});

User.associations = models => {
  User.hasMany(models.Post);
};

module.exports = User;
