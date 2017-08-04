const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');

module.exports = {
  entry: {
    logoTitle: './src/logoTitle.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: '/public',
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