// src/pages/HomePage.jsx
import React from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center mb-4">
        <a href="/" className="text-xl font-bold">
          Home
        </a>
        <div className="flex space-x-4">
          <div className="text-blue-500">Favorites</div>
          <div className="text-blue-500">Cart</div>
          <div className="text-blue-500">Account</div>
        </div>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
