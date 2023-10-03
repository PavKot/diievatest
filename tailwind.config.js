/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#222222",
        blur: "rgba(255, 255, 255, 0.50)",
        blur2: "rgba(255, 255, 255, 0.80)",
        gray: "#BFBFBF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      backdropBlur: {
        5.6: "5.599999904632568px",
      },
    },
  },
  plugins: [],
};
