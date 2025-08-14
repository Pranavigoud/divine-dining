import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 px-6 md:px-20 py-12">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-400">Divine Dining</h2>
          <p className="text-sm mt-2">
            explore our full menu of fresh flavors and signature dishes
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-base font-bold text-white mb-3">
            Subscribe To Our Newsletter
          </h2>
          <div className="flex overflow-hidden rounded-bl-3xl rounded-tr-3xl rounded-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-5 py-4 w-full outline-none bg-[#FCF8F5] text-black text-sm"
            />
            <button className="bg-[#4A4A4F] px-6 text-white hover:bg-gray-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-4">CONTACT</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gray-400 mt-1" />
              1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" /> +91 987-654-3210
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-400" /> +91 123-454-7890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" /> info@example.com
            </li>
          </ul>
        </div>

        {/* Our Links */}
        <div>
          <h3 className="font-bold text-white mb-4">OUR LINKS</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Reservation</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-white mb-4">OUR SERVICES</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Strategy & Research</li>
            <li className="hover:text-white cursor-pointer">Fast Delivery</li>
            <li className="hover:text-white cursor-pointer">Seat Reservation</li>
            <li className="hover:text-white cursor-pointer">Pickup in Store</li>
            <li className="hover:text-white cursor-pointer">Our Menu</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold text-white mb-4">HELP CENTER</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Category Filter</li>
            <li className="hover:text-white cursor-pointer">Testimonial</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
