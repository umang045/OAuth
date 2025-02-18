const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Role = require("./roleModel");

const User = sequelize.define("User", {
  role: {
    type: DataTypes.INTEGER,
    reference: {
      model: Role,
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
  },
  isBlocked: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
});

module.exports = User;
