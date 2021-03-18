const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        // custom height for content between navbar and footer
        content: 'calc(100vh - 4rem)'
      },
      colors: {
        gray: colors.gray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
