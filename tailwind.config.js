const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Inter', ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
};
