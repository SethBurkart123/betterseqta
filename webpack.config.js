// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    seqta: './src/SEQTA.js',
    background: './src/background.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      }
    ]
  }
}
