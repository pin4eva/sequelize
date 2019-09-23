const Sequelize = require("sequelize");
const db = require("../../db/database");

const Cases = db.define("cases", {
  title: Sequelize.STRING,
  likes: { type: Sequelize.INTEGER, defaultValue: 0 },
  appellant: Sequelize.STRING,
  respondent: Sequelize.STRING,
  suit_no: Sequelize.STRING,
  page_no: Sequelize.STRING,
  court: Sequelize.STRING,
  cat: Sequelize.STRING,
  judges: {
    type: Sequelize.INTEGER,
    references: JudgeLink,
    key: "id"
  }
});
const JudgeLink = db.define("judges", {
  role: Sequelize.STRING,
  judge: {
    type: Sequelize.STRING
  }
});
