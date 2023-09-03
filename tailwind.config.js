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
        bluePastelPrimary: "#EDF7FF",
        redPrimary: "#ec4c23",

        // SECONDARY COLORS
        blueSecondary: "#002E52",
        hellowSecondary: "#EDAA00",
        blackSecondary: "#080808",
        greySecondary: "#A9A9A9",
        redSecondary: "#d82f05",

        // TERTIARY COLORS
        hellowTertiary: "#e0a100",

        // MODAL COLORS
        success: "#44bc6b",
        information: "#0c6ce2",
        warning: "#e89604",
        error: "#ec4c23",

        successbdicon: "#27a451",
        informationbdicon: "#0256bd",
        warningbdicon: "#d18501",
        errorbdicon: "#d8340b",

        successbg: "#ebf6ee",
        informationbg: "#e5eff9",
        warningbg: "#fef6e8",
        errorbg: "#fdecea",

        successbd: "#9cd5ab",
        informationbd: "#b5ccdb",
        warningbd: "#ede7cb",
        errorbd: "#f0c7c7",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      width:{
        '104' : '26rem',
        '110' : '28rem',
        '128' : '32rem',
        '130' : '34rem',
        '132' : '36rem'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
