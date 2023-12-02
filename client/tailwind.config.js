/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0EAF5",
        secondary: "#2E77AE",
        blueButton: "#0d2137",
      },
    },
    plugins: [],
  },
};
