/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
