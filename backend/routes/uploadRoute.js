const express = require("express");
const router = express.Router();
const { isLogin, isAdmin } = require("../middleware/authMiddleware");
const { uploadImages, deleteImages } = require("../controller/uploadCntrl");
const { prodImageResize, uploadImg } = require("../middleware/uploadImg");

router.delete("/delImg/:id", deleteImages);
router.post(
  "/uploadImg",
  uploadImg.array("images", 10),
  prodImageResize,
  uploadImages
);

module.exports = router;
