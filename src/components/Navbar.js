import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ColorPicker from "./ColorPicker";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-text fixed w-full z-50 shadow-lg font-playful transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* SVG Name Component */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Link to="/" className="group">
    <svg 
      width="220" 
      height="60" 
      viewBox="0 0 220 60" 
      className="transform -rotate-2"
    >
      <defs>
        <linearGradient id="shimmer-gradient" x1="-100%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="40%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
          
          <animate 
            attributeName="x1" 
            from="-100%" 
            to="100%" 
            dur="3s" 
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="x2" 
            from="0%" 
            to="200%" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </linearGradient>
      </defs>

      {/* This is now the HOVER state (solid fill) */}
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className="font-cursive-bold text-3xl fill-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Priti Yadav
      </text>

      {/* This is now the DEFAULT state (animated outline) */}
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className="font-cursive-bold text-3xl fill-accent opacity-100 group-hover:opacity-0 transition-opacity duration-300"
        strokeWidth="1"
        stroke="url(#shimmer-gradient)"
      >
        Priti Yadav
      </text>
    </svg>
  </Link>
</motion.div>


        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-secondary p-6 transition-transform duration-500 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={toggleMenu} className="text-text text-2xl absolute top-6 right-6">
          <FaTimes />
        </button>
        <div className="mt-16 flex flex-col space-y-6">
          <NavLinks mobile closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false, closeMenu = () => {} }) {
  const { pathname } = useLocation();
  const { darkMode, setDarkMode } = useTheme();

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
      {links.map((link) => {
        const isActive = pathname === link.to;
        return (
          <Link
            key={link.to}
            to={link.to}
            onClick={handleClick}
            className={`relative block ${mobile ? "text-lg" : ""} hover:text-accent transition group ${isActive ? "text-accent font-bold drop-shadow-glow" : ""}`}
          >
            {link.label}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
        );
      })}
      
      {/* Container for toggles */}
      <div className={`flex items-center gap-2 ${mobile ? 'flex-col pt-4' : ''}`}>
        <a
          href="/Priti_Yadav_SDE.pdf"
          download
          onClick={handleClick}
          className={`bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded text-sm font-medium transition ${mobile ? 'w-full text-center' : ''}`}
        >
          Resume
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-text text-xl p-2 rounded-full hover:bg-secondary transition transform hover:scale-110"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <ColorPicker />
      </div>
    </>
  );
}