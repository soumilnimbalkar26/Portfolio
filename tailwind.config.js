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
          background: '#f0f0f0',
          text: '#0f0f0f',
          primary: '#137FEC'
        },
        dark: {
          background: '#0f0f0f',
          text: '#f0f0f0',
          primary: '#137FEC'
        }
      }
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}
