/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontFamily: {
      p: ['Montserrat', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
      serif: ['Oranienbaum', 'serif'],
    },
    extend: {
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      aspectRatio: {
        'landscape': '2 / 1 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      colors: {
        'pumpkin': '#C97324',
        'cream': '#FBF2E9',
        'light': 'white',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}