/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/*/.landing.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Montserrat como la fuente principal
      },
    },
  },
  plugins: [],
}