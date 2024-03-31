/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        'primary-medium': '#0D0D0D',
        'primary-light': '#b7b7b7',
        'white-light': 'rgba(255, 255, 255, 0.1)',
        'white-medium': '#f6f6f6',
        gray: '#e5e5e5',
        secondary: '#3d3d3d',
        red: '#e53637',
      },
      backgroundColor: {
        'black-overlay': 'rgba(0,0,0,0.7)',
      },
      fontFamily: {
        nunito: ['Nunito Sans, sans-serif'],
      },
      padding: {
        xl: '70px',
      },
      lineHeight: {
        m: '25px',
      },
      letterSpacing: {
        s: '2px',
        m: '4px',
      },
      maxWidth: {
        col: '260px',
      },
      screens: {
        'mobile-l': '425px',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
};
