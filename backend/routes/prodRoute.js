const express = require("express");
const {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getProductByPagination,
} = require("../controller/prodCntrl");
const router = express.Router();

router.post("/addProd", addProduct);
router.get("/getAllProd", getAllProduct);
router.get("/getPaginatedProd", getProductByPagination);
router.get("/getSingleProd/:id", getOneProduct);
router.put("/updateProd/:id", updateProduct);
router.delete("/deleteProd/:id", deleteProduct);

module.exports = router;
