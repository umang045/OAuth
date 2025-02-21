const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define("Role", {
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Role;
