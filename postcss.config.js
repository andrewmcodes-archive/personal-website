const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const importUrl = require('postcss-import-url')
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const stylelint = require('stylelint')

let developmentPlugins = [
  importUrl(),
  postcssImport({
    path: 'frontend/styles',
    plugins: [stylelint]
  }),
  tailwind,
  autoprefixer,
  cssnano,
  postcssPresetEnv({
    stage: 3
  })
]

const plugins =
  process.env.NODE_ENV === 'production'
    ? [...developmentPlugins, cssnano]
    : [...developmentPlugins]

module.exports = { plugins }
