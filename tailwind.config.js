const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["europa", "Noto Sans KR", "sans-serif"],
      serif: ["freight-text-pro", "serif"],
      ...defaultTheme.fontFamily.mono,
    },
    extend: {},
  },
  plugins: [],
};
