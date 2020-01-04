const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'none',
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // add css to DOM
          'css-loader', // convert css into js
          'sass-loader', // convert saas into css
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
});
