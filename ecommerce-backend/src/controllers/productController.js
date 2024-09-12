const productService = require("../services/productServices");

// get all products

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products); // Respond with the fetched products
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

module.exports = { getProducts };
