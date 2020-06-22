const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.md',
      './src/**/*.liquid',
      './src/**/*.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('@tailwindcss/ui'),
    require('tailwindcss-debug-screens'),
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ['polka-dots', 'circuit-board'],

      // The foreground colors of the pattern
      colors: {
        default: '#9C92AC',
        'gray-800': '#27303f',
        light: '#f1f5f9',
        lighter: '#F8FAFC'
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        '100': '1.0',
        '10': '0.1',
        '5': '0.05'
      }
    })
  ]
}
