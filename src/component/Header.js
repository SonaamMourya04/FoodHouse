import foodhouselogo from "../utils/foodhouselogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-orange-500 px-6 py-8 shadow-2xl sticky top-0 z-50">
      {/* Logo + Name */}
      <div className="flex items-center space-x-4">
        <img
          className="w-35 h-35 rounded-full shadow-lg"
          src={foodhouselogo}
          alt="Food House Logo"
        />
        <div>
          
        </div>
        
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 items-center text-lg font-semibold text-white">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-200 hover:scale-105 transform">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition-colors duration-200 hover:scale-105 transform">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-200 hover:scale-105 transform">Contact Us</Link>
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
