import React from 'react';
import me from '../assets/me.jpg';

const AboutMe = () => {
  return (
    <section id='aboutme' className="w-full h-auto p-8 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="mt-3 w-full md:w-1/2 h-80">
          <img
            src={me}
            alt="Me on my park adventure"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-4">
          <h2 className="text-4xl font-bold text-sky-600">A Day in the Park</h2>
          <p className="text-lg leading-relaxed">
            Visiting the park was an unforgettable experience. Surrounded by towering trees, fresh air,
            and the sound of birds, I felt an incredible connection to nature. Every trail I walked led
            to a new adventure, and each view was more breathtaking than the last.
          </p>
          <p className="text-lg leading-relaxed">
            Join me as I recount the highlights of this special day, the moments of peace, and the 
            excitement of exploring hidden gems within the park. Whether you're a nature lover or just 
            looking for inspiration, I hope my journey resonates with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
