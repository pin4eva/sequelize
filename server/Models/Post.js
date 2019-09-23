const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = () => {
  return db.define("post", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    tite: {
      type: Sequelize.STRING
    },
    desc: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.TEXT
    },
    updatedAt: Sequelize.DATE,
    createdAt: Sequelize.DATE
  });
};
