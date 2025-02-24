const Sequelize = require("sequelize");
const Role = require("./roleModel");
const User = require("./userModel");
const sequelize = require("../config/database");
const Product = require("./productsModel");

User.belongsTo(Role, { foreignKey: "role" });

module.exports = {
  Sequelize,
  sequelize,
  User,
  Role,
  Product,
};
