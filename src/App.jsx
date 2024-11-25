import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'; // Add Contact component

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <Hero />
      <AboutMe />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
