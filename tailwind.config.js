/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{ extend: {
  keyframes: {
    fall: {
      "0%": { transform: "translateY(-200px)", opacity: "0" },
      "70%": { transform: "translateY(75vh)", opacity: "1" },
      "85%": { transform: "translateY(70vh)" },
      "100%": { transform: "translateY(75vh)" },
    },
  },
  fontFamily: {
      handwritten: ['"Shadows Into Light"', 'cursive'],
      quirky: ['"Fredoka"', 'sans-serif'],
       playful: ['"Comfortaa"', 'cursive'],
    },
  animation: {
    fall: "fall 2s ease-out forwards",
  },
  dropShadow: {
    glow: "0 0 10px #14b8a6",
  },
},
  },
  fontFamily: {
  handwritten: ['"Shadows Into Light"', 'cursive'],
  quirky: ['"Fredoka"', 'sans-serif'],
},




  
  plugins: [],
};
