import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
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
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
