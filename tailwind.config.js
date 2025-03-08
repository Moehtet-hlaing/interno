/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,php}","./index.html","*/**/*.{html,js,jsx,ts,tsx,php}" // Adjust based on your project structure
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "960px",
    //   xl: "1200px",
    // },
    // fontFamily: {
    //     primary: ["DM Serif Display", "serif"],
    //     secondary: ["Jost", "sans-serif"],
    // },
    // backgroundImage: {
    //     hero: 'url("./assets/hero/bg.jpg")',
    //     grid: 'url("./assets/grid.png")',
    // },
    extend: {
        // colors: {
        //     primary: {
        //         DEFAULT: "#292f36",
        //         hover: "#343e4a",
        //     },
        //     secondary: {
        //         DEFAULT: "#4d5053",
        //     },
        //     accent: {
        //         DEFAULT: "#cda274",
        //         secondary: "#f4f0ec",
        //         hover: "#b88c5d",
        //     },
        // },
    },
  },
  plugins: [],
};

