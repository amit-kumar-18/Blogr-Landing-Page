/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        heroImage: 'url("images/bg-pattern-intro-mobile.svg")',
      },
      keyframes: {
        popup: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        popup: 'popup 150ms ease-in-out',
      },
    },
  },
  plugins: [],
}
