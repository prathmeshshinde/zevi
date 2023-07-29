/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(255,255,255, 0.4), rgba(255,244,244, 0.4)), url('/src/assets/bg-home.jpg')",
      },
    },
  },
  plugins: [],
};
