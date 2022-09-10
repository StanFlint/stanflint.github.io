const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
  devServer: {
    port: 8080
  }
}