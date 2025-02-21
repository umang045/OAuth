const { generateToken } = require("../config/jwtToken");
const { User, Role } = require("../models");
const {
  deleteOne,
  addOne,
  updateOne,
  getOne,
  getAll,
} = require("../service/crudService");

//register User
const regUser = addOne(User);

//delete User
const delUser = deleteOne(User);

//update User
const updateUser = updateOne(User);

//get Single User
const getSingleUser = getOne(User);

//get All User
const getAllUsers = getAll(User);

//get user by role
const getUserWithRole = async (req, res) => {
  try {
    const users = await User.findAll({
      include: {
        model: Role,
        attributes: ["roleName"],
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    throw new Error(error);
  }
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(user.id);
    return res.status(200).json({ token });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  regUser,
  delUser,
  updateUser,
  getSingleUser,
  getAllUsers,
  getUserWithRole,
  loginUser,
};
