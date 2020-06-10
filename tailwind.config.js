module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.md']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-debug-screens')]
}
