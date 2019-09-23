const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = () => {
  return db.define("tag", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING
  });
};
