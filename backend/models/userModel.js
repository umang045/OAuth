const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Role = require("./roleModel");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: true,
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
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

User.prototype.comparePassword = async function (password) {
  if (!password || !this.password) {
    throw new Error("data and hash arguments required");
  }
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
