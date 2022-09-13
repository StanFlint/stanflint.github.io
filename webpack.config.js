const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const isProduction = argv.mode !== 'development'

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css'
      }),
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
}