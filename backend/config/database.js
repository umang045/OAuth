const Sequelize = require("sequelize");

const sequelize = new Sequelize("sys", "root", "#Gj3ck930sql", {
  host: "localhost",
  dialect: "mysql",
  logging:false
});

module.exports = sequelize;
