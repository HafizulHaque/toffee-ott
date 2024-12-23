import { sidenavWidth } from './src/constants/uiConstants';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "primary-action": "#FF3988",
        "background": "#3E003B",
      },
      padding: {
        "left-nav": "80px",
      },
      boxShadow: {
        "header": "rgba(255, 255, 255, 0.1) 0px 10px 10px -10px",
        "player": "rgba(255, 57, 136, 0.1) 0px 4px 16px, rgba(255, 57, 136, 0.1) 0px 8px 24px, rgba(255, 57, 136, 0.1) 0px 16px 56px",
        "back-button": "rgba(255, 57, 136, 0.2) 0px 12px 28px 0px, rgba(255, 57, 136, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
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
