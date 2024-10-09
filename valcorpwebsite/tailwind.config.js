/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    './src/**/*.{html,ts}',  // Escanea todos los archivos HTML y TypeScript en la carpeta src
    './src/app/admin/**/*.{html,ts}',  // Archivos dentro de la carpeta admin
    './src/app/auth/**/*.{html,ts}',   // Archivos dentro de la carpeta auth
    './src/app/landing/**/*.{html,ts}',   // Archivos dentro de landing
    './src/app/componentes/**/*.{html,ts}',   // Archivos dentro de componentes
    './src/app/pages/**/*.{html,ts}',   // Archivos dentro de pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  // Montserrat como la fuente principal
      },
    },
  },
  plugins: [],
}