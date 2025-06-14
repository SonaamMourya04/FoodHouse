import foodhouselogo from "../utils/foodhouselogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-orange-300 px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Logo + Name */}
      <div className="flex items-center space-x-4">
        <img
          className="w-35 h-35 object-contain rounded-full"
          src={foodhouselogo}
          alt="Food House Logo"
        />
        <span className="text-xl font-bold text-orange-900">FoodHouse</span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 items-center text-lg font-semibold text-gray-800">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        

        {/* Cart Icon with Item Count */}
        <li className="relative">
          <Link to="/cart" className="flex items-center">
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>

        {/* Login/Profile Icon */}
        <li>
          <Link to="/login">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="w-8 h-8 rounded-full hover:scale-105 transition-transform"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
