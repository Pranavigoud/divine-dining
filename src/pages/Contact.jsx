import React from "react";
import contactbg from "../assets/contactbg.png"; // your background image
import Footer from "../components/Footer"; // import footer component

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 bg-opacity-50"></div>

        {/* Hero Content */}
        <h1 className="relative text-3xl md:text-5xl font-semibold text-center px-4">
          Elevate your dining experience to a higher quality.
        </h1>
        <button className="relative mt-6 border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
          Make a Reservation
        </button>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Contact;
