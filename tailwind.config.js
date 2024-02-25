/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'item': '400px',
        'item2': '800px',
      },
      maxWidth: {
        'screen-3xl': '1650px',
      },
      colors: {
        elzero: '#0075FF',
      }
    },
  },
  plugins: [],
}

