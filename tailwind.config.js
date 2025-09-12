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
  animation: {
    fall: "fall 2s ease-out forwards",
  },
},
  },



  
  plugins: [],
};
