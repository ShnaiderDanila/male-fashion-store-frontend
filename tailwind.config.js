/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#3d3d3d',
        red: '#e53637',
        'primary-light': '#b7b7b7',
        'white-light': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        nunito: ['Nunito Sans, sans-serif'],
      },
    },
  },
  plugins: [],
};
