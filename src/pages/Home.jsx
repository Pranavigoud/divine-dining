import React from "react";
import homeimage from "../assets/homeimage.png";      
import homeimage2 from "../assets/homeimage2.png";   
import homeimage3 from "../assets/homeimage3.png";   
import homeimage4 from "../assets/homeimage4.jpg";   
import homeimage5 from "../assets/homeimage5.png";   
import Ellipse from "../assets/Ellipse.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import Group5 from "../assets/Group5.png";
import contactbg from "../assets/contactbg.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { TbBrandPinterest } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import Footer from "../components/Footer";
import { useNavigate } from "@tanstack/react-router";

const Home = () => {
    const navigate = useNavigate(); 
    const imageClasses =
        "rounded-tl-3xl rounded-br-3xl shadow-lg object-cover object-center w-full max-w-[450px]";

    return (
        <div className="relative bg-white font-poppins overflow-hidden">
            {/* Decorative leaves */}
            <img src={Group4} alt="flower" 
                 className="pointer-events-none select-none z-0 absolute opacity-20 grayscale max-w-[120px] top-4 right-4 sm:max-w-none sm:top-2 sm:right-10" /> 
            <img src={Group3} alt="decoration" 
                 className="pointer-events-none select-none z-0 absolute max-w-[100px] top-60 right-2 sm:max-w-none sm:top-96 sm:right-0" /> 
            <img src={Group5} alt="decoration" 
                 className="pointer-events-none select-none z-0 absolute opacity-20 grayscale max-w-[100px] left-4 top-20 sm:max-w-none sm:left-5/11 sm:top-40" /> 
            <img src={Ellipse} alt="decoration" 
                 className="pointer-events-none select-none z-0 absolute max-w-[80px] top-0 sm:max-w-none" /> 
            <img src={Ellipse} alt="decoration" 
                 className="pointer-events-none select-none z-0 absolute max-w-[80px] top-0 -translate-y-10 sm:max-w-none sm:-translate-y-20" /> 
            <img src={Ellipse} alt="decoration" 
                 className="pointer-events-none select-none absolute z-0 max-w-[80px] top-0 -translate-x-10 sm:max-w-none sm:-translate-x-30" /> 
            {/* ABOUT SECTION */}
            <img src={Group4} alt="flower" 
                 className="pointer-events-none select-none absolute z-0 opacity-20 grayscale max-w-[120px] top-10 left-4 sm:max-w-none sm:top-2/12 sm:left-10" /> 
            <img src={Group3} alt="decoration" 
                 className="pointer-events-none select-none absolute z-0 max-w-[100px] top-40 left-10 sm:max-w-none sm:top-4/16 sm:left-4/12" /> 
            {/* MENU SECTION */}
            <img src={Group3} alt="decoration" 
                 className="pointer-events-none select-none absolute z-0 max-w-[100px] top-80 right-2 sm:max-w-none sm:top-6/18 sm:right-0" /> 
            <img src={Group5} alt="decoration" 
                 className="pointer-events-none select-none absolute z-0 opacity-20 grayscale max-w-[100px] right-10 top-40 sm:max-w-none sm:right-90 sm:top-3/7 sm:-translate-y-1/2" /> 
            <img src={Group4} alt="flower" 
                 className="pointer-events-none select-none absolute z-0 opacity-20 grayscale max-w-[120px] top-60 right-20 sm:max-w-none sm:top-12/25 sm:right-2/7" /> 
            {/* GALLERY SECTION */}
            <img src={Group3} alt="decoration" 
                 className="pointer-events-none select-none absolute z-0 max-w-[100px] top-80 left-10 sm:max-w-none sm:top-10/19 sm:left-4/12" /> 
            <img src={Group4} alt="flower" 
                 className="pointer-events-none select-none absolute z-0 opacity-20 grayscale max-w-[120px] top-80 left-20 sm:max-w-none sm:top-18/28 sm:left-2/7" /> 

            {/* ===== HERO ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-8 md:px-28 pt-16 md:pt-28">
                {/* Left */}
                <div className="order-2 md:order-1 flex flex-col gap-5 text-center md:text-left">
                    <h1 className="text-[#1E2C45] font-david-libre font-bold leading-tight text-5xl md:text-7xl">
                        Indulge in <br /> Culinary Excellence
                    </h1>
                    <p className="text-black">
                        "In Our Restaurant, Dining Is An Art Form. We Blend The Finest Seasonal Ingredients
                        With World-Class Culinary Techniques To Create Dishes."
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-[#333333] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg hover:opacity-90 transition"
                         onClick={() => navigate({ to: "/Menu" })}
                        >
                            Menu
                        </button>
                        <button className="bg-[#1E2C45] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg hover:opacity-90 transition"
                         onClick={() => navigate({ to: "/Reservation" })}
                        >
                            Book a table
                        </button>
                    </div>
                    <div className="flex justify-center md:justify-start gap-8 pt-8 px-6">
                        <FaFacebookF className="text-xl border rounded-full p-2 w-10 h-10 cursor-pointer hover:bg-[#1E2C45] hover:text-white transition" />
                        <FaInstagram className="text-xl border rounded-full p-2 w-10 h-10 cursor-pointer hover:bg-[#1E2C45] hover:text-white transition" />
                        <RxTwitterLogo className="text-xl border rounded-full p-2 w-10 h-10 cursor-pointer hover:bg-[#1E2C45] hover:text-white transition" />
                    </div>
                </div>

                {/* Right */}
                <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
                    <div className="relative inline-block">
                        <img src={homeimage} alt="Restaurant" className={imageClasses} />
                        <img
                            src={homeimage2}
                            alt="Food"
                            className="absolute bottom-30 -left-30 w-50 h-50"
                        />
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-24 md:mt-32 px-8 md:px-28 text-center md:text-left">
                <div className="flex justify-center md:justify-start z-50 order-1 h-[80vh] max-lg:h-[60vh]">
                    <img src={homeimage4} alt="chef at work" className={imageClasses} />
                </div>
                <div className="order-2">
                    <h2 className="text-[#1E2C45] font-playfair text-5xl md:text-6xl font-bold mb-6">
                        About Us
                    </h2>
                    <p className="text-black text-base md:text-lg font-poppins leading-7 md:leading-10">
                        At Divine Dining, we believe dining is more than just a meal—it's an experience of
                        flavors, traditions, and warmth. Established with a passion for excellence, we serve a
                        fusion of authentic and contemporary dishes prepared with the freshest ingredients.
                        Our Promise: Exceptional taste, world-class service, and an ambiance that truly makes you feel special.
                    </p>
                </div>
            </section>

            {/* ===== VIEW MENU ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mt-24 md:mt-32 px-8 md:px-28">
                <div className="order-2 md:order-1 text-center">
                    <h3 className="text-[#1E2C45] font-playfair font-bold text-3xl md:text-4xl leading-snug mb-6">
                        Explore our full menu of fresh flavors and signature dishes.
                    </h3>
                    <button className="bg-[#1E2C45] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                     onClick={() => navigate({ to: "/Menu" })}
                    >
                        View Menu
                    </button>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end z-10">
                    <img
                        src={homeimage3}
                        alt="Plated Dish"
                        className={imageClasses}
                    />
                </div>
            </section>

            {/* ===== VIEW GALLERY ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mt-24 md:mt-32 px-8 md:px-28 pb-20">
                <div className="flex justify-center md:justify-start z-10">
                    <img src={homeimage5} alt="ambience" className={imageClasses} />
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1E2C45] mb-4 leading-snug font-playfair">
                        Discover the beauty and elegance that define every Divine Dining experience.
                    </h3>
                    <button className="bg-[#1E2C45] text-white px-6 py-2 font-semibold rounded-lg shadow hover:opacity-90 transition"
                     onClick={() => navigate({ to: "/Gallery" })} 
                    >
                        View Gallery
                    </button>
                </div>
            </section>

            {/* ===== CONTACT US ===== */}
            <section id="contact" className="px-8 md:px-28 py-20 bg-white text-center relative">
                <img
                    src={Group4}
                    alt="leaf decoration"
                    className="pointer-events-none select-none absolute right-1/3 -top-10 opacity-20 grayscale max-w-[100px] sm:max-w-none" // CHANGED
                />
                <h2 className="text-[#1E2C45] font-playfair text-4xl md:text-5xl font-bold mb-12">
                    Contact Us
                </h2>
                <div className="flex flex-col gap-6 items-center max-w-lg mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full text-center sm:text-left">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <MdEmail className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg">info@eatery.com</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full text-center sm:text-left">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <FiPhone className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg">123 456 789</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full text-center sm:text-left">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <GoLocation className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg">
                            123 Name Street, Kolma, 45678, Stateville
                        </span>
                    </div>
                </div>
                <div className="mt-12 inline-flex items-center gap-6 px-4 sm:px-20 py-3 flex-wrap justify-center">
                    <FaInstagram className="text-xl cursor-pointer hover:text-[#1E2C45] duration-300 hover:scale-125 transition-transform" />
                    <PiFacebookLogoBold className="text-xl cursor-pointer hover:text-[#1E2C45] duration-300 hover:scale-125 transition-transform" />
                    <TbBrandPinterest className="text-xl cursor-pointer hover:text-[#1E2C45] duration-300 hover:scale-125 transition-transform" />
                    <RiYoutubeLine className="text-xl cursor-pointer hover:text-[#1E2C45] duration-300 hover:scale-125 transition-transform" />
                    <BsTwitterX className="text-xl cursor-pointer hover:text-[#1E2C45] duration-300 hover:scale-125 transition-transform" />
                </div>
            </section>

            {/* ===== FORMER CONTACT HERO SECTION ===== */}
            <div
                className="relative h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${contactbg})` }}
            >
                <div className="absolute inset-0 bg-black/20 bg-opacity-50"></div>
                <h1 className="relative text-3xl md:text-5xl font-semibold text-center px-4">
                    Elevate your dining experience to a higher quality.
                </h1>
                <button
                    className="relative mt-6 border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300"
                    onClick={() => navigate({ to: "/Reservation" })}
                >
                    Make a Reservation
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
