/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        title: ["'Carter One', cursive"],
        western: ["'Smokum', cursive"],
      },
    },
  },
  plugins: [],
};
