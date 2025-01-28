module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#3E5565", // Darker light blue for accents
        secondary: "#7A99AE", // Medium blue for subtle highlights
        accent: "#AFC6D6", // Pale blue for backgrounds
        highlight: "#D1B89E", // Beige for highlights
        deep: "#8B6C5A", // Rich brown for buttons
      },
    },
  },
  plugins: [],
};