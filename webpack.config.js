const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')

module.exports = {
  entry: {
    main: './frontend/javascript/index.js'
  },
  devtool: 'source-map',
  stats: {
    modules: true,
    builtAt: false,
    timings: false,
    children: false
  },
  output: {
    path: path.resolve(__dirname, 'output', '_bridgetown', 'static', 'js'),
    filename: 'all.[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css'
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, '.bridgetown-webpack', 'manifest.json')
    }),
    new HtmlWebpackPlugin(),
    new HtmlWebpackInlineSVGPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|md)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                '@babel/plugin-transform-runtime',
                {
                  helpers: false
                }
              ],
              [
                'prismjs',
                {
                  languages: [
                    'markup',
                    'css',
                    'clike',
                    'javascript',
                    'bash',
                    'crystal',
                    'docker',
                    'erb',
                    'git',
                    'graphql',
                    'haml',
                    'liquid',
                    'markdown',
                    'markup-templating',
                    'ruby',
                    'scss',
                    'yaml'
                  ],
                  plugins: ['line-numbers'],
                  theme: 'okaidia',
                  css: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader',
        options: {
          outputPath: '../fonts',
          publicPath: '../fonts'
        }
      }
    ]
  }
}
