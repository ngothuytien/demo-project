/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'kohinoor-bangla': ['Kohinoor Bangla'],
        'inter': ['Inter']
      },
      colors: {
        'blue-logo': '#17ACAC',
        'dark-blue': '#0E8585',
        'bg-blue': '#184B4B'
      }
    },
  },
  plugins: [],
}
