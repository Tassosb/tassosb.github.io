/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        title: ["'Caprasimo', cursive"],
        western: ["'Smokum', cursive"],
      },
    },
  },
  plugins: [],
};
