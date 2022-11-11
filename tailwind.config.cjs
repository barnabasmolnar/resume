const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["text-mirage", "underline", "font-bold", "text-justify"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        mirage: {
          DEFAULT: "#1E2338",
          50: "#B2B9D6",
          100: "#A5ADCF",
          200: "#8A95C0",
          300: "#707DB2",
          400: "#5765A2",
          500: "#495588",
          600: "#3A446D",
          700: "#2C3453",
          800: "#1E2338",
          900: "#0A0C13",
        },
        sundance: {
          DEFAULT: "#C7A75A",
          50: "#F6F0E3",
          100: "#F0E8D4",
          200: "#E6D8B5",
          300: "#DCC797",
          400: "#D1B778",
          500: "#C7A75A",
          600: "#AE8C3B",
          700: "#846A2D",
          800: "#5A491F",
          900: "#302710",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        container: "52rem",
      },
    },
  },
  plugins: [],
};
