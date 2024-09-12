// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img
        src={product.img[0]}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductCard;
