/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#7dd3fc",
        secondary:"#0ea5e9",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
    },
  },
  plugins: [],
}
