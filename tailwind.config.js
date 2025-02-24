/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // ✅ Custom Breakpoint for Mobile S
      },
    },
  },
  plugins: [],
};
