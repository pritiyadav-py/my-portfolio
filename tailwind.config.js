/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:{ 
  extend: {
    colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
      },
  keyframes: {
    fall: {
      "0%": { transform: "translateY(-200px)", opacity: "0" },
      "70%": { transform: "translateY(75vh)", opacity: "1" },
      "85%": { transform: "translateY(70vh)" },
      "100%": { transform: "translateY(75vh)" },
    },
    'fall-and-bounce': {
          '0%': { transform: 'translateY(-200%)', opacity: '0' },
          '70%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(-15%)' },
          '90%': { transform: 'translateY(0)' },
          '95%': { transform: 'translateY(-7%)' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
    "gentle-tilt": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
    "stroke-glow": {
          "0%, 100%": { stroke: "var(--color-accent)", opacity: 1 },
          "50%": { stroke: "#06b6d4", opacity: 0.7 }, // Fades to a cyan color
        }
  },
  fontFamily: {
      'cursive-bold': ['"Pacifico"', 'cursive'],
      quirky: ['"Fredoka"', 'sans-serif'],
       playful: ['"Comfortaa"', 'cursive'],
    },
 
  animation: {
        // ... (keep the "gradient-rotate" animation if you still have it)
        "gentle-tilt": "gentle-tilt 5s ease-in-out infinite alternate",
        fall: "fall 2s ease-out forwards",
        'fall-and-bounce': 'fall-and-bounce 1.5s ease-out forwards',
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
