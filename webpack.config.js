const HtmlWebpackPlugin = require('html-webpack-plugin');
const RequireFrom = require('webpack-require-from');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist/'),
    // publicPath: 'leon/'
  },
  entry: ['./index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader, 
          "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
