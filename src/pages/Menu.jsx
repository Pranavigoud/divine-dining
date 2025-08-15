import React from "react";
import Footer from "../components/Footer"
import Group4 from "../assets/Group4.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";

const Menu = () => {
  return (
  <div>
    <div className="bg-[#FAF7F4] min-h-screen flex flex-col items-center px-6 py-10 font-poppins relative">
      {/* Decorative Images - Disabled Pointer Events */}
      <img
        src={Group4}
        alt="decoration"
        className="absolute z-0 bottom-5 left-0 opacity-20 grayscale pointer-events-none"
      />
      <img
        src={Group4}
        alt="decoration"
        className="absolute z-0 bottom-1/2 right-0 opacity-20 grayscale pointer-events-none"
      />
      <img
        src={Group3}
        alt="decoration"
        className="absolute z-0 top-0 left-0 pointer-events-none"
      />
      <img
        src={Group2}
        alt="decoration"
        className="absolute z-0 right-0 bottom-0 pointer-events-none"
      />

      {/* Title */}
      <h1 className="text-5xl font-playfair text-[#1E2C45] mb-8">Our Menu</h1>

      {/* Starters */}
      <div className="w-full max-w-3xl border-t border-[#1E2C45] py-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Starters</h2>
        <div className="space-y-6">
          <div>
            <p className="text-lg">WINGS</p>
            <p className="text-lg">6pc $10 | 12pc $20</p>
            <p className="text-base">
              Deep-fried chicken wings or drumsticks coated with seasonings.
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Salmon Bites | $14</p>
            <p className="text-base">
              Cubed salmon that is battered and fried into bite pieces
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">SLIDERS | $14</p>
            <p className="text-base">3 beef sliders</p>
          </div>
        </div>
      </div>

      {/* Mains */}
      <div className="w-full max-w-3xl border-t border-[#1E2C45] py-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mains</h2>
        <div className="space-y-6">
          <div>
            <p className="font-normal text-lg">Shrimp | $15</p>
            <p className="text-lg">Basket | Grits</p>
            <br />
            <p className="text-base">
              Crispy cajun fried shrimp piled on a French baguette
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Tacos</p>
            <p className="text-lg">
              Beef $12 | Chicken $14 | Fish or Shrimp $16
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Yellow Rice</p>
            <p className="text-lg">
              Chicken $15 | Shrimp $17 | Combo $20
            </p>
            <p className="text-base">
              Boiled or steamed rice stir-fried with soy sauce
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Alfredo Fettuccine</p>
            <p className="text-lg">
              Chicken $15 | Shrimp $17 | Combo $20
            </p>
            <p className="text-base">
              Cream sauce with your choice of meat
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Salmon | $22</p>
            <p className="text-base">
              8 oz salmon served with mashed potatoes and broccoli
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Stuffed Turkey Leg | $25</p>
            <p className="text-base">
              Mac & Cheese | Yellow Rice | Dirty Rice | Shrimp Alfredo $30
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Steak | $30</p>
            <p className="text-base">
              12 oz Ribeye served with mashed potatoes and broccoli
            </p>
          </div>
        </div>
      </div>

      {/* Drinks */}
      <div className="w-full max-w-3xl border-t border-[#1E2C45] py-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Drinks</h2>
        <div className="space-y-6">
          <div>
            <p className="font-normal text-lg">Peach Bellini | $12</p>
            <p className="text-base">
              Sparkling wine with peach purée, served chilled in a flute
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Mango Mojito | $14</p>
            <p className="text-base">
              Fresh mango, mint leaves, lime, and soda with a hint of rum
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Lavender Lemonade | $10</p>
            <p className="text-base">
              House-made lemonade infused with lavender syrup, served over ice
            </p>
          </div>
          <div>
            <p className="font-normal text-lg">Espresso Martini | $15</p>
            <p className="text-base">
              Rich espresso shaken with vodka and coffee liqueur, topped with crema
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
  </div>
  );
};

export default Menu;
