/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.html", "layouts/**/*.html"],
  theme: {
    colors: {
      "dark-border": "rgb(93, 70, 49)",
    },
    extend: {
      fontFamily: {
        title: ["'Akronim', cursive"],
      },
    },
  },
  plugins: [],
};
