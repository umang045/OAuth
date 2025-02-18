const express = require("express");
const {
  regUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  delUser,
} = require("../controller/userCntrl");
const router = express.Router();

router.post("/regUser", regUser);
router.get("/getAllUsers", getAllUsers);
router.get("/getSingleUser/:id", getSingleUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", delUser);

module.exports = router;
