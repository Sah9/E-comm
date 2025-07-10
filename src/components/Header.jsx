import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ShopEase
        </Link>

        <div className="flex items-center gap-4 text-gray-700 text-sm">
          <Link to="/wishlist" className="relative">
            <FaHeart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login">
            <FaUser size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
