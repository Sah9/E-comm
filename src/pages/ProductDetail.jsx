import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain mx-auto"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="flex items-center gap-2 text-yellow-500 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-sm text-gray-600 ml-2">
            ({product.rating?.count} reviews)
          </span>
        </div>

        <p className="mt-3 text-indigo-600 text-xl font-semibold">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add to Cart
          </button>

          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="text-red-500 hover:text-red-600 flex items-center gap-1"
          >
            <FaHeart /> Wishlist
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold">Delivery by:</h2>
          <p>🚚 Get it within 5-7 days</p>
          <h2 className="text-lg font-semibold mt-4">Payment Options:</h2>
          <ul className="list-disc list-inside">
            <li>Cash on Delivery</li>
            <li>UPI / Credit / Debit Card</li>
            <li>EMI Available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
