/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    extend: {
      backdropBlur: ['hover']
    }
  },
  theme: {
    extend: {
      minHeight: {
        32: '8rem'
      },
      letterSpacing: {
        0.15: '0.15em',
        0.2: '0.2em'
      },
      colors: {
        grey: {
          'light': '#DDD',
          'DEFAULT': '#999',
          'dark': '#555'
        }
      },
      borderColor: {
        'eee': '#EEE'
      },
      backgroundImage: {
        'glass': `
          linear-gradient(
            115deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(204, 204, 204, 0.2) 25%,
            rgba(196, 193, 188, 0.2) 50%,
            rgba(204, 204, 204, 0.2) 75%,
            rgba(255, 255, 255, 0.2) 100%
          )
        `
      },
      backdropBlur: {
        px: '1px',
      },
      boxShadow: {
        'DEFAULT': '0px 0px 8px -2px rgba(0, 0, 0, 0.25)',
        'hover': `
          0px 0px 16px -4px rgba(0, 0, 0, 0.25),
          32px 16px 32px -32px rgba(0, 0, 0, 0.05),
          16px 32px 32px -32px rgba(0, 0, 0, 0.05)
        `
      },
      transitionDuration: {
        '800': '800ms',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        /* md: '768px', */
        lg: '1024px',
        xl: '1200px',
      },
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px'
    },
  },
  plugins: [],
}
