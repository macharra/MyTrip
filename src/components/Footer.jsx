import React from "react";
import  antelopes  from "../assets/antelopes.jpg"; // Import the image directly

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url(${antelopes})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 px-8 py-16 space-y-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">
          Find the perfect trip for you and discover extraordinary adventures with me!
        </h2>
        <p className="text-lg">
          Embark on a journey of exploration and excitement as I guide you towards unforgettable experiences across my trip.
        </p>

       {/*  */}

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold">MY TRIP</h3>
            <p className="text-sm">
              A trip to extraordinary beauty, culture, and exhilarating adventures awaiting in the captivating landscapes of Kenya.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold">Navigations</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline hover:text-sky-400">Home</a></li>
              <li><a href="#aboutme" className="hover:underline hover:text-sky-400">AboutMe</a></li>
              <li><a href="#gallery" className="hover:underline hover:text-sky-400">Gallery</a></li>
              <li><a href="#contact" className="hover:underline hover:text-sky-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold">Social</h3>
            <ul className="space-y-2">
              <li><a href="#instagram" className="hover:underline hover:text-sky-400">Instagram</a></li>
              <li><a href="#twitter" className="hover:underline hover:text-sky-400">Twitter</a></li>
              <li><a href="#youtube" className="hover:underline hover:text-sky-400">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
