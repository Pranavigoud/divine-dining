import { Link, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  const navOptions = [
    { id: 1, name: "Home", path:"/"},
    { id: 2, name: "Menu", path:"/" },
    { id: 3, name: "Gallery", path:"/" },
    { id: 4, name: "Online Ordering", path:"/" },
    { id: 5, name: "Contact", path:"/" },
  ];

  return (
    <nav className="bg-[#FCF8F5] w-full shadow-sm font-poppins">
      <div className="flex justify-between items-center px-6 md:px-10 h-[80px]">
        {/* Logo */}
        <h1 className="font-playfair text-2xl font-bold text-[#1E2C45]">
          LOGO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navOptions.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-sm cursor-pointer hover:text-[#E27D60] transition"
            >
              {item.name}
            </Link>
          ))}
          <button className="border rounded-lg px-6 py-2 font-semibold text-[#1E2C45] bg-[#1E2C451A] hover:bg-[#1E2C4533] transition"
           onClick={() =>{setIsOpen(false);navigate({to:"/reservation"})} }
          >
    
            Book a Table
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer text-[#1E2C45]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer text-[#1E2C45]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FCF8F5] border-t border-gray-200 flex flex-col items-center py-4 space-y-4">
          {navOptions.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-sm cursor-pointer hover:text-[#E27D60] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button
            className="border rounded-lg px-6 py-2 font-semibold text-[#1E2C45] bg-[#1E2C451A] hover:bg-[#1E2C4533] transition"
            onClick={() =>{setIsOpen(false);navigate({to:"/reservation"})} }
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
