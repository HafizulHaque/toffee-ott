import { sidenavWidth } from './src/constants/uiConstants';

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
        "sidenav-gradient": "linear-gradient(to right, rgba(19, 0, 22, 1), rgba(19, 0, 22, .5))",
      }
    },
  },
  plugins: [],
};
