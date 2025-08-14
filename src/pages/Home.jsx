import React from "react";
import homeimage from "../assets/homeimage.png";      // Big restaurant photo (hero, right)
import homeimage2 from "../assets/homeimage2.png";   // Small circular food image (overlaps hero)
import homeimage3 from "../assets/homeimage3.png";   // Plated dish image (right, below About)
import homeimage4 from "../assets/homeimage4.png";   // Chef / left images
import homeimage5 from "../assets/homeimage5.png";   // Ambience photo
import Ellipse from "../assets/Ellipse.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import Group5 from "../assets/Group5.png";
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
            <img src={Group4} alt="flower" className="pointer-events-none select-none absolute top-2 right-10 opacity-20 grayscale" />
            <img src={Group3} alt="decoration" className="pointer-events-none select-none absolute top-96 right-0 " />
            <img src={Group5} alt="decoration" className="pointer-events-none select-none absolute left-5/11 top-40 opacity-20 grayscale" />
            <img src={Ellipse} alt="decoration" className="pointer-events-none select-none absolute top-0" />
            <img src={Ellipse} alt="decoration" className="pointer-events-none select-none absolute top-0 -translate-y-20" />
            <img src={Ellipse} alt="decoration" className="pointer-events-none select-none absolute top-0 -translate-x-30" />
            {/* ABOUT SECTION */}
            <img src={Group4} alt="flower" className="pointer-events-none select-none absolute top-3/16 left-10 opacity-20 grayscale" />
            <img src={Group3} alt="decoration" className="pointer-events-none select-none absolute top-4/16 left-4/12 " />
            {/* MENU SECTION */}
            <img src={Group3} alt="decoration" className="pointer-events-none select-none absolute top-7/18 right-0 " />
            <img src={Group5} alt="decoration" className="pointer-events-none select-none absolute right-90 top-1/2 -translate-y-1/2 opacity-20 grayscale" />
            <img src={Group4} alt="flower" className="pointer-events-none select-none absolute top-13/24 right-2/7 opacity-20 grayscale" />
            {/* GALLERY SECTION */}
            <img src={Group3} alt="decoration" className="pointer-events-none select-none absolute top-11/18 left-4/12 " />
            <img src={Group4} alt="flower" className="pointer-events-none select-none absolute top-20/28 left-2/7 opacity-20 grayscale" />
            {/* ===== HERO ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 px-8 md:px-28 pt-16 md:pt-28">
                {/* Left */}
                <div className="order-2 md:order-1 flex flex-col gap-5">
                    <h1 className="text-[#1E2C45] font-david-libre font-bold leading-tight text-5xl md:text-7xl">
                        Indulge in <br /> Culinary Excellence
                    </h1>
                    <p className="text-gray-600">
                        "In Our Restaurant, Dining Is An Art Form. We Blend The Finest Seasonal Ingredients
                        With World-Class Culinary Techniques To Create Dishes."
                    </p>
                    <div className="flex gap-4">
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
                    <div className="flex gap-8 pt-8 px-6">
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
                            className="absolute bottom-30 -left-30 w-50 h-50 "
                        />
                    </div>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mt-24 md:mt-32 px-8 md:px-28">
                <div className="flex justify-center md:justify-start z-50">
                    <img src={homeimage4} alt="chef at work" className={imageClasses} />
                </div>
                <div className="text-end">
                    <h2 className="text-[#1E2C45] font-playfair text-5xl md:text-6xl font-bold mb-6">
                        About Us
                    </h2>
                    <p className="text-black text-base md:text-lg font-poppins leading-10">
                        At Divine Dining, we believe dining is more <br /> than just a meal—it's an experience of <br />
                        flavors, traditions, and warmth. Established <br />with a passion for excellence, we serve a <br />
                        fusion of authentic and contemporary dishes <br /> prepared with the freshest ingredients.
                        <br />
                        Our Promise: Exceptional taste, world-class <br />service, and an ambiance that truly makes <br /> you feel special.
                    </p>
                </div>
            </section>

            {/* ===== VIEW MENU ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mt-24 md:mt-32 px-8 md:px-28">
                {/* Left Content */}
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

                {/* Right Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end z-10">
                    <img
                        src={homeimage3}
                        alt="Plated Dish"
                        className="rounded-3xl object-cover object-center w-full max-w-[450px] shadow-lg"
                    />
                </div>
            </section>


            {/* ===== VIEW GALLERY ===== */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mt-24 md:mt-32 px-8 md:px-28 pb-20">
                <div className="flex justify-center md:justify-start z-10">
                    <img src={homeimage5} alt="ambience" className={imageClasses} />
                </div>
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold  text-[#1E2C45] mb-4 leading-snug font-playfair">
                         Discover the beauty and <br />elegance that define every <br />Divine Dining experience.
                    </h3>
                    <button className="bg-[#1E2C45] text-white px-6 py-2 font-semibold rounded-lg shadow hover:opacity-90 transition "
                     onClick={() => navigate({ to: "/Gallery" })} 
                    >
                        View Gallery
                    </button>
                </div>
            </section>

            {/* ===== CONTACT US ===== */}

            <section className="px-8 md:px-28 py-20 bg-white text-center relative">
                {/* Decorative leaf */}
                <img
                    src={Group4}
                    alt="leaf decoration"
                    className="pointer-events-none select-none absolute right-1/3 -top-10 opacity-20 grayscale "
                />

                {/* Heading */}
                <h2 className="text-[#1E2C45] font-playfair text-4xl md:text-5xl font-bold mb-12">
                    Contact Us
                </h2>

                {/* Contact details */}
                <div className="flex flex-col gap-6 items-center max-w-lg mx-auto">
                    {/* Email */}
                    <div className="flex items-center gap-4 w-full px-38">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <MdEmail className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg">info@eatery.com</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 w-full px-38">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <FiPhone className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg">123 456 789</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4 w-full pl-38">
                        <div className="bg-[#1E2C45] text-white rounded-full p-3 flex items-center justify-center w-12 h-12">
                            <GoLocation className="text-xl" />
                        </div>
                        <span className="text-gray-700 text-lg text-left">
                            123 Name Street, Kolma, 45678, Stateville
                        </span>
                    </div>
                </div>

                {/* Social icons box */}
                <div className="mt-12 inline-flex items-center gap-6 px-20 py-3 ">
                    <FaInstagram className="text-xl cursor-pointer hover:text-[#1E2C45] transition" />
                    <PiFacebookLogoBold className="text-xl cursor-pointer hover:text-[#1E2C45] transition" />
                    <TbBrandPinterest className="text-xl cursor-pointer hover:text-[#1E2C45] transition"/>
                    <RiYoutubeLine className="text-xl cursor-pointer hover:text-[#1E2C45] transition"/>
                    <BsTwitterX className="text-xl cursor-pointer hover:text-[#1E2C45] transition"/>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
