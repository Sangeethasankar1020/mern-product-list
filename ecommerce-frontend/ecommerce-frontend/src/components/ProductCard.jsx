import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`); // Navigate to product details page
  };

  return (
    <div className="relative p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden bg-white">
      {/* Tags */}
      {product.isNew && (
        <span className="absolute top-0 left-0 bg-green-600 text-white text-xs px-3 py-1 rounded-br-xl z-10">
          New Product
        </span>
      )}
      {product.isStockOut && (
        <span
          className={`absolute ${
            product.isNew ? "mt-8" : "mt-0"
          } top-0 left-0 bg-red-600 text-white text-xs px-3 py-1 rounded-br-xl z-10`}
        >
          Stock Out
        </span>
      )}

      {/* Image Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        className="mb-4"
      >
        {product.img.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-52 object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>

      {/* Product Info */}
      <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
      <p className="text-lg font-bold text-gray-800 mt-4">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-lg">{product.rating} ★</span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleViewDetails}
          className="flex-grow px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          View Details
        </button>
        <button className="flex-grow px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
