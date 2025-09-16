import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion"; // <-- ✅ Add this!
import { useLocation } from "react-router-dom";

export default function Navbar() {



  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg font-playful">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold  text-teal-400 tracking-wide hover:text-teal-300 transition"
        >
          Priti Yadav
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 p-6 transition-transform duration-500 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-2xl absolute top-6 right-6"
        >
          <FaTimes />
        </button>
        <div className="mt-16 space-y-6">
          <NavLinks mobile closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false, closeMenu = () => {} }) {
  const location = useLocation();
const currentPath = location.pathname;

  const linkClass = `relative block ${
    mobile ? "text-lg" : ""
  } hover:text-teal-400 transition group`;

  const handleClick = () => {
    if (mobile) closeMenu();
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link, index) => {
  const isActive = currentPath === link.to;

  return (
    <Link
      key={index}
      to={link.to}
      onClick={handleClick}
      //className={`${linkClass} ${isActive ? "text-shadow: 0 0 10px #14b8a6" : ""}`}
      className={`${linkClass} ${isActive ? "text-teal-400 font-bold drop-shadow-glow" : ""}`}

    >
      {link.label}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </Link>
  );
})}


      {/* Resume Button */}
      <a
        href="/Priti_Yadav_Resume.pdf"
        download
        onClick={handleClick}
        className={`${
          mobile
            ? "inline-block bg-teal-500 text-center w-full"
            : "bg-teal-500"
        } hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium transition`}
      >
        Resume
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />
    </>
  );
}

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded-full hover:text-teal-400 transition transform hover:scale-110"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
