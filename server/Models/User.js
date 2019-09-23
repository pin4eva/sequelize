const Sequelize = require("sequelize");
const db = require("../../db/database");

module.exports = () => {
  return db.define("user", {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
      // allowNull:false
    },
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  });
};
