const jwt = require("jsonwebtoken");
const { User, Role } = require("../models");
const { getOne } = require("../service/crudService");

//middleare for is login or not
const isLogin = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode?.id;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorize Token, Please Login");
    }
  } else {
    throw new Error("There is no Token Attach TO Headers");
  }
};

//middleware for isAdmin or not
const isAdmin = async (req, res, next) => {
  const id = req.userId;
  try {
    const user = await User.findOne({
      where: { id },
      include: [{ model: Role, attributes: ["roleName"] }],
    });
    const role = user?.Role?.roleName;
    if (role === "admin") next();
    else throw new Error("You are not Admin");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { isLogin, isAdmin };
