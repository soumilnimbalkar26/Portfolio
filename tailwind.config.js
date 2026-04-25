import tailwindcssAnimated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        light: {
          background: '#f8fafc',
          text: '#0f172a',
          primary: '#2563eb'
        },
        dark: {
          background: '#0f172a',
          text: '#f1f5f9',
          primary: '#0ea5e9'
        }
      }
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}
