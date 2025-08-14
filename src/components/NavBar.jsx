import { useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navOptions = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "#about" },
    { id: 3, name: "Menu", path: "/Menu" },
    { id: 4, name: "Gallery", path: "/Gallery" },
    { id: 5, name: "Contact", path: "/Contact" },
  ];

  const handleNavClick = async (item) => {
    setIsOpen(false);

    if (item.path.startsWith("#")) {
      // If already on home page, scroll directly
      if (window.location.pathname === "/") {
        const el = document.querySelector(item.path);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home, then scroll
        await navigate({ to: "/" });
        setTimeout(() => {
          const el = document.querySelector(item.path);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate({ to: item.path });
    }
  };

  return (
    <nav className="bg-[#FCF8F5] text-[#1E2C45] w-full shadow-sm font-poppins">
      <div className="flex justify-between items-center px-6 md:px-10 h-[80px]">
        <img 
        srcSet={`${logo} 1x`}
        src={logo} alt="logo" className="cursor-pointer w-32 h-auto" onClick={() => navigate({ to: "/" })} />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navOptions.map((item) => (
            <span
              key={item.id}
              className="text-sm cursor-pointer hover:text-[#E27D60] transition"
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </span>
          ))}
          <button
            className="border rounded-lg px-6 py-2 font-semibold text-[white] bg-[#1E2C45] hover:bg-[#1E2C4533] transition"
            onClick={() => {
              setIsOpen(false);
              navigate({ to: "/reservation" });
            }}
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
            <span
              key={item.id}
              className="text-sm cursor-pointer hover:text-[#E27D60] transition"
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </span>
          ))}
          <button
            className="border rounded-lg px-6 py-2 font-semibold text-[#1E2C45] bg-[#1E2C451A] hover:bg-[#1E2C4533] transition"
            onClick={() => {
              setIsOpen(false);
              navigate({ to: "/reservation" });
            }}
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
