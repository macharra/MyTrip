import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import giraffeVideo from '../assets/giraffeVideo.mp4';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={giraffeVideo}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 text-white space-y-6 max-w-xl">
        <h3 className="text-6xl font-extrabold drop-shadow-xl text-sky-500 leading-snug">
          Discover the Majesty of Nature<br />
          At Its Wildest
        </h3>
        <p className="text-lg font-medium leading-relaxed text-gray-200">
          Step into a world of untamed beauty and unforgettable moments. Explore the wonders of the national park, 
          where every turn reveals a new adventure waiting to be discovered.
        </p>
        <button
  className="px-6 py-3 bg-black text-sky-400 font-semibold rounded-lg shadow-lg hover:bg-sky-800 hover:text-gray-900 transition duration-300 transform hover:scale-105"
  onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
>
  See More →
</button>

      </div>

      {/* Social Icons */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a href="#" className="text-white text-3xl hover:text-sky-500 transition duration-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-white text-3xl hover:text-sky-500 transition duration-300">
          <FaFacebook />
        </a>
        <a href="#" className="text-white text-3xl hover:text-sky-500 transition duration-300">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Hero;
