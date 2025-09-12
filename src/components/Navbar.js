import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">Priti Yadav</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-800 space-y-4">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile }) {
  const linkClass = `block ${mobile ? "text-lg" : ""} hover:text-teal-400 transition`;

  return (
    <>
      <Link to="/" className={linkClass}>Home</Link>
      <Link to="/about" className={linkClass}>About</Link>
      <Link to="/projects" className={linkClass}>Projects</Link>
      <Link to="/skills" className={linkClass}>Skills</Link>
      <Link to="/certifications" className={linkClass}>Certifications</Link>
      <Link to="/contact" className={linkClass}>Contact</Link>
      <a
        href="/Priti_Yadav_Resume.pdf"
        download
        className={`${
          mobile
            ? "inline-block bg-teal-500 text-center w-full"
            : "bg-teal-500"
        } hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium`}
      >
        Resume
      </a>
      <ThemeToggle />
    </>
  );
}

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded-full hover:text-teal-400 transition"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
