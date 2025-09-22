/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector', // Cambiar de 'class' a 'selector' para Tailwind CSS 4
  theme: {
    extend: {},
  },
  plugins: [],
}