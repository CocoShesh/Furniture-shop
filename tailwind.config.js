/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Blinker", "sans-serif"],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require("daisyui", "@tailwindcss/forms")],
};
