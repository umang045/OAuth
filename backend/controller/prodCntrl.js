const { Product } = require("../models");
const {
  addOne,
  updateOne,
  deleteOne,
  getOne,
  getAll,
} = require("../service/crudService");

//create product
const addProduct = addOne(Product);

//update product
const updateProduct = updateOne(Product);

//delete Product
const deleteProduct = deleteOne(Product);

//get one product
const getOneProduct = getOne(Product);

//get all product
const getAllProduct = getAll(Product);

//get product by pagination
const getProductByPagination = async (req, res) => {
  let { page, limit } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  const offset = (page - 1) * limit;
  const result = await Product.findAndCountAll({
    offset,
    limit,
  });
  res.json(result);
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
  getAllProduct,
  getProductByPagination,
};
