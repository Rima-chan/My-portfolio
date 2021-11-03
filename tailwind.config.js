const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs' : '300px',
        ...defaultTheme.screens,
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        '1/10': '10%',
        '1/5': '20%',
        '3/10': '30%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '7/10': '70%',
        '4/5': '80%',
        '9/10': '90%'
      },
      inset: {
        '1/2': '50%',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          },
        },
        'slide-out-left': {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateX(-100px)',
            opacity: 0
          },
        },
        'skill-bar': {
          '0%': {
            transform: 'scaleX(0)',
            
          },
          '100%': {
            transform: 'scaleX(1)',
          },
          'fade-in': {
            '0%': {
              opacity: 0,
              transform: 'scale(0)',
              
              
            },
            '100%': {
              opacity: 0.5,
              transform: 'scale(1)',
            },
          }
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-out-left': 'slide-out-left 1s ease-in',
        'skill-bar': 'skill-bar 2s ease-in-out',
        'fade-in': 'fade-in 1s ease-linear'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
