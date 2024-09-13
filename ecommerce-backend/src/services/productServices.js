const Product = require("../models/productModel");

// get all products
const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
// get product by id
const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProducts, getProductById };
