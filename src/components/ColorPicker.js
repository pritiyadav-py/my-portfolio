import { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-text text-xl p-2 rounded-full hover:bg-secondary transition"
        title="Change Theme"
      >
        <FaPalette />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-0 mt-2 w-48 bg-secondary border border-text/20 rounded-lg shadow-xl p-2 z-50"
          >
            <p className="text-text/80 text-sm px-2 pb-2 font-bold">Select a Theme</p>
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => handleThemeChange(t.name)}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition flex items-center gap-3 ${
                  theme === t.name ? 'bg-accent text-white' : 'hover:bg-primary'
                }`}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: t.colors.dark.accent }}></div>
                <span>{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}