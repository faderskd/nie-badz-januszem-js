const nodeExternals = require('webpack-node-externals');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    entry: glob.sync('./tests/**/*.spec.js'),
  },
  mode: 'none',
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()], // ignore all modules in node_modules folder,
  devtool: 'inline-cheap-module-source-map',
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
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'images',
            esModule: false,
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist_tests/'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  plugins: [new MiniCssExtractPlugin(
      {
        filename: '[name].css',
      },
  ), new CleanWebpackPlugin()],
};
