/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jjr-red': '#8B0000',
        'jjr-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
};