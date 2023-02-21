const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../dbAdapter/sequelize");

const Products = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Products;
