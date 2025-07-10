import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 mt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">ShopEase</h3>
          <p className="text-sm">
            Your one-stop shop for quality and affordable products.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@shopease.com</p>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">© {new Date().getFullYear()} ShopEase</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
