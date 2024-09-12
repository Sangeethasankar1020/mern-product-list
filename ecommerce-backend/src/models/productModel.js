const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  img: [String],
  price: Number,
  rating: Number,
  stock: Number,
  isNew: Boolean,
  isStockOut: Boolean,
  category: String,
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
