const { sidenavWidth } = require('./src/constants/uiConstants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-action": "#FF3988",
        "background": "#3E003B",
        "sidenav-gradient": "#130016",
      },
      padding: {
        "left-nav": "80px",
      },
      boxShadow: {
        "header": "rgba(255, 255, 255, 0.1) 0px 10px 10px -10px",
      },
      width: {
        "nav-normal": `${sidenavWidth.normal}px`,
        "nav-expanded": `${sidenavWidth.expanded}px`,
      },
      backgroundImage: {
        "sidenav-gradient-normal": "linear-gradient(to right, rgba(19, 0, 22, .8), rgba(19, 0, 22, .3))",
        "sidenav-gredient-expanded": "linear-gradient(to right, rgba(19, 0, 22, .8), rgba(19, 0, 22, .4))",
      }
    },
  },
  plugins: [],
};
