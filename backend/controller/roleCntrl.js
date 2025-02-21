const sequelize = require("../config/database");
const Role = require("../models/roleModel");
const {
  deleteOne,
  addOne,
  updateOne,
  getOne,
  getAll,
} = require("../service/crudService");

//add role
const addRole = addOne(Role);

//delete role
const delRole = deleteOne(Role);

//update Role
const updateRole = updateOne(Role);

//get Single Role
const getSingleRole = getOne(Role);

//get All Role
const getAllRoles = getAll(Role);

module.exports = {
  addRole,
  delRole,
  updateRole,
  getSingleRole,
  getAllRoles,
};
