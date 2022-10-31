/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        test: '200vh'
      },
      letterSpacing: {
        0.15: '0.15em',
        0.2: '0.2em'
      },
      transitionDuration: {
        '800': '800ms',
      }
    },
  },
  plugins: [],
}
