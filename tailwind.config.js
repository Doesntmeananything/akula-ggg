const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ggg-gray": {
          50: "#E3E3E3",
          100: "#EDEDED",
          200: "#D1D1CC",
          300: "#B9B9B9",
          400: "#8D8D8D",
          500: "#676767",
          550: "#656462",
          900: "#0B0B0B",
        },
      },
      fontFamily: {
        sans: ["Guminert", ...defaultTheme.fontFamily.sans],
        mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
        shocka: ["Shocka Family", ...defaultTheme.fontFamily.sans],
        pop: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
