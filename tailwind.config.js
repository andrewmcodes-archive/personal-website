module.exports = {
  purge: {
    mode: 'production',
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.md'],
    options: {
      whitelist: ['min-h-screen', 'text-gray-100', 'bg-cool-gray-900']
    }
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-debug-screens')]
}
