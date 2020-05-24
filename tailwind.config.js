module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Source Sans Pro", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      inset: {
        "3": ".75rem",
        "4": "1rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
