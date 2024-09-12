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

module.exports = { getAllProducts };
