import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import foodhouselogo from "../utils/foodhouselogo.png";

const Footer = () => {
  return (
    <footer className="bg-orange-100 py-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Logo */}
        <div className="flex items-center mb-2">
          <img
            src={foodhouselogo}
            alt="FoodHouse Logo"
            className="w-10 h-10 object-contain mr-2"
          />
          <h2 className="text-xl font-bold text-orange-800">FoodHouse</h2>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-orange-700 mb-2">
          <a
            href="https://www.linkedin.com/in/sonam-mourya-204562255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FoodHouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
