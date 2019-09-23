require("dotenv");
const Sequelize = require("sequelize").Sequelize;
const dbConfig = require("./config");
module.exports = new Sequelize(
  "jointhj3_lawathenaeum",
  "jointhj3_peter",
  "Admin123",
  {
    host: "162.241.24.128",
    dialect: "mysql",

    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
