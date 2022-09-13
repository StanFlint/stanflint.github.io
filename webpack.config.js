const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const isProduction = argv.mode !== 'development'

    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new CopyPlugin({
      patterns: [{
          from: 'src/public', to: ''
      }]
    }),
  ],
  devServer: {
    port: 8080
  }
}