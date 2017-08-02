const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './public/js/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  devServer: {
    contentBase: '/dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}