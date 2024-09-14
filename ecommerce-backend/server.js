const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./src/routes/productRoutes");
const authRoutes = require("./src/routes/authRoutes");

// load environment variables
dotenv.config();

// initialize express app
const app = express();

// middleware

app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("im connected through 5000");
});
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
// mongodb connection

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(`mongodb connected :${conn.connection.host}`);
  } catch (error) {
    console.error(`error:${error.message}`);
    process.exit(1);
  }
};

// start server and connect to the database

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
