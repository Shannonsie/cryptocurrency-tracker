/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: "'Poppins', serif"
      },
      colors: {
        'navy': '#192130',
      },
    },
  },
  plugins: [],
}