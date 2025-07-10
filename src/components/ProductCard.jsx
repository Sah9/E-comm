import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative border p-3 rounded shadow hover:shadow-lg transition-all group">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
        <h2 className="mt-2 text-sm font-medium line-clamp-2 group-hover:text-indigo-600">
          {product.title}
        </h2>
        <div className="flex items-center gap-1 text-yellow-500 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>
        <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
      </Link>

      {/* Action Buttons */}
      <div className="mt-2 flex justify-between items-center">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-indigo-600 text-white px-3 py-1 text-xs rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>

        <button
          onClick={() => dispatch(addToWishlist(product))}
          className="text-red-500 hover:text-red-600"
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
