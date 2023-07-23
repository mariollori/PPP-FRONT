/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY COLORS
        bluePrimary: "#003965",
        hellowPrimary: "#F8B91E",
        blackPrimary: "#1E1E1E",

        // SECONDARY COLORS
        blueSecondary: "#002E52",
        hellowSecondary: "#EDAA00",
        blackSecondary: "#080808",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
