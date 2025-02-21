const express = require("express");
const {
  addRole,
  getAllRoles,
  getSingleRole,
  updateRole,
  delRole,
} = require("../controller/roleCntrl");
const { isLogin, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/addRole", isLogin, isAdmin, addRole);
router.get("/getAllRoles", isLogin, isAdmin, getAllRoles);
router.get("/getSingleRole/:id", isLogin, isAdmin, getSingleRole);
router.put("/updateRole/:id", isLogin, isAdmin, updateRole);
router.delete("/deleteRole/:id", isLogin, isAdmin, delRole);

module.exports = router;
