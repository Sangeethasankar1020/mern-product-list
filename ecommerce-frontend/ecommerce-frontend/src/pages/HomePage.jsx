import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center mb-4">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link to="/favorites" className="text-blue-500">
            Favorites
          </Link>
          <Link to="/cart" className="text-blue-500">
            Cart
          </Link>
          <Link to="/account" className="text-blue-500">
            Account
          </Link>
        </div>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
