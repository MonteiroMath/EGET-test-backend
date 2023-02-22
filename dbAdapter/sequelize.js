const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "eget",
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = {
  sequelize,
};
