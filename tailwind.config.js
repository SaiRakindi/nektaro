/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#068C0A",
          200: "#004B23",
          300: "#C9E4CA",
        },
        grey: {
          100: "#7D7D7D",
          200: "#DCDDE0",
          300: "#282828",
        },
        white: {
          primary: "#ffffff",
          "light-bg": "#FBFBFD",
          "off-white": "#f9f9f9",
        },
      },
    },
  },
  plugins: [],
};
