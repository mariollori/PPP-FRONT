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
        greyPrimary: "#F3F3F3",

        // SECONDARY COLORS
        blueSecondary: "#002E52",
        hellowSecondary: "#EDAA00",
        blackSecondary: "#080808",
        greySecondary: "#A9A9A9",
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
