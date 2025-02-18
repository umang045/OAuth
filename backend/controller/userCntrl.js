const User = require("../model/userModel");

//register User
const regUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete User
const delUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      return res.status(200).json({ message: "User Deleted Sucesfully" });
    }
    return res.status(404).json({ message: "user not found" });
    // res.status(200).json({ message: "user Deleted Succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update User
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const updateUser = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(updateUser);
    }
    return res.status(404).json({ message: "user not found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get Single User
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get All User
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { regUser, delUser, updateUser, getSingleUser, getAllUsers };
