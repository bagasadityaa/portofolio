/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ABeeZee: ["ABeeZee", "sans-serif"],
      },
      colors: {
        color: {
          primary: "#eeeeee",
          accent: "#ffc639",
          secondary: "#393e46",
          dark: "#222831",
        },
      },
    },
  },
  plugins: [],
};
