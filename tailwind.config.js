const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif' ]
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#EB2D3E',
      secondary: '#CEB27C',
      black: '#26262B',
      white: colors.white,
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
