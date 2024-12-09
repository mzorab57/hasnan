/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      fontFamily: {
        courgette: ['Courgette', 'cursive'], // Add Courgette as a custom font
      },
      colors: {
        primary: '#F0AD48', // Define a primary color
        // secondary: '#D97706', // Define a secondary color
        // accent: '#4ADE80', // Define an accent color
        // customGray: '#F3F4F6', // Custom gray color
      },
    },
  },
  plugins: [],
};
