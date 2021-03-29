module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'amarillo': '#FFBD12',
        'primario-hover': '#10466e',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}