const path = require('path');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()],
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // add css to it's own file
          'css-loader', // convert css into js
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                minimize: false,
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin(
      {
        filename: '[name].css',
      },
  ), new CleanWebpackPlugin()],
});
