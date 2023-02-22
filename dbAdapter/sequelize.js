const Sequelize = require("sequelize");

console.log("user");
console.log(process.env.DBUSER);

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
