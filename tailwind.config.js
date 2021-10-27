module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
      maxWidth: {
        '1/6': '350px'
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
          }
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-out-left': 'slide-out-left 1s ease-in',
        'skill-bar': 'skill-bar 2s ease-in-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
