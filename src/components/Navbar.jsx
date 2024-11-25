import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-20 bg-black bg-opacity-40 backdrop-blur-md">
      <div className="text-white text-2xl font-bold">
        Brigid <span className="text-blue-800">.</span>
      </div>
      <ul className="flex space-x-6 text-white">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-800 transition"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-800 transition"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-800 transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
