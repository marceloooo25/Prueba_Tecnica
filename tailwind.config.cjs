// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        dark:  '#1F3429',
        primary: '#F5A31F',
        lightGray: '#DFDFDF',
        midGray: '#D9D9D9',
      },
      fontFamily: {
        heading: ['Poppins','sans-serif'],
        body:    ['Poppins','sans-serif'],
      },
      fontSize: {
        'hero-title': ['62px',{ lineHeight:'81px', letterSpacing:'0' }],
      },
      borderColor: {
        divider: 'rgba(127,127,127,0.2)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at center, #08150E 0%, #020503 100%)',
      },
    },
  },
  plugins: [],
}
