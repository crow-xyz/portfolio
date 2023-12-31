module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
        textColor: ['responsive', 'hover', 'focus', 'dark'],
      },
      colors: {
        'cyan': {
          'light': '#66fcf1',
          'dark': '#45a29e',
        },
        'darkblue': {
          'light': '#1f2833',
          'dark': '#0b0c10',
        },
        'gray': {
          'DEFAULT': '#c5c6c7'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
