import React from "react";

// Import images and videos directly from the assets folder
import antelopes from "../assets/antelopes.jpg";
import antelopes2 from "../assets/antelopes2.jpg";
import baboon from "../assets/baboon.jpg";
import giraffes from "../assets/giraffes.jpg";
import me from "../assets/me.jpg";
import zebras from "../assets/zebras.jpg";
import zebras2 from "../assets/zebras2.jpg";
import ostriches from "../assets/ostriches.jpg";
import ostrichVideo from "../assets/ostrichVideo.mp4";
import giraffeVideo from "../assets/giraffeVideo.mp4";

const Gallery = () => {
  // Media items array with manual imports
  const items = [
    { path: giraffeVideo, type: "video", name: "Giraffe Video" },
    { path: ostrichVideo, type: "video", name: "Ostrich Video" },
    { path: antelopes, type: "image", name: "Antelopes" },
    { path: antelopes2, type: "image", name: "Antelopes 2" },
    { path: baboon, type: "image", name: "Baboon" },
    { path: zebras, type: "image", name: "Zebras" },
    { path: zebras2, type: "image", name: "Zebras 2" },
    { path: giraffes, type: "image", name: "Giraffes" },
    { path: ostriches, type: "image", name: "Ostriches" },
    { path: me, type: "image", name: "Me" },
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        {/* Featured Section */}
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">
          Explore My Gallery
        </h2>
        <div className="mb-12">
          {/* <video
            className="h-auto w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            controls
            src={giraffeVideo} // Manually set the featured video
          >
            Your browser does not support videos.
          </video>
          <p className="text-center mt-4 text-lg text-gray-700">
            Giraffe Video
          </p> */}
        </div>

        {/* Gallery Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group transition duration-300 transform hover:scale-105"
            >
              {/* Render video for video items */}
              {item.type === "video" ? (
                <video
                  className="h-auto max-w-full rounded-lg shadow-lg"
                  controls
                  src={item.path}
                >
                  Your browser does not support videos.
                </video>
              ) : (
                /* Render images for image items */
                <img
                  className="h-auto max-w-full rounded-lg shadow-lg"
                  src={item.path}
                  alt={item.name}
                />
              )}
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
