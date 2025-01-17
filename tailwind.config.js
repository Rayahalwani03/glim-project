/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      lightGray: '#F2F4F8',
      customPink: '#FAF2F3', // Add your color with a custom name
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

