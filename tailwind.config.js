module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
