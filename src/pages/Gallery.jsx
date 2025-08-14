import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";

const Gallery = () => {
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#FCF8F5] min-h-[100vh] relative">
      {/* Background decorations */}
      <img src={Group1} alt="" className="absolute z-0 bottom-40 hidden md:block" />
      <img src={Group3} alt="" className="absolute z-0 top-20 hidden md:block" />
      <img src={Group4} alt="" className="absolute z-0 right-0 grayscale opacity-20 hidden md:block" />
      <img src={Group4} alt="" className="absolute z-0 right-3 top-1/3 grayscale opacity-20 hidden md:block" />
      <img src={Group2} alt="" className="absolute z-0 right-80 bottom-0 hidden md:block" />

      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-3 py-10 px-4">
        <h1 className="font-playfair font-[400] text-4xl md:text-6xl italic text-[#1E2C45]">Gallery</h1>
        <p className="font-poppins text-center max-w-2xl">
          Discover the beauty and elegance that define every <br className="hidden md:block" /> Divine Dining experience.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-6 md:px-20 lg:px-44 py-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            className="z-20 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-2">

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 
                       text-white bg-black/60 hover:bg-black rounded-full p-3 sm:p-4 z-50"
          >
            <GrFormPreviousLink size={30} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-xl w-full px-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:right-10 text-white text-3xl sm:text-4xl font-bold hover:text-red-400"
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>
            <img
              src={images[selectedIndex]}
              alt="popup"
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 
                       text-white bg-black/60 hover:bg-black rounded-full p-3 sm:p-4 z-50"
          >
            <GrFormNextLink size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
