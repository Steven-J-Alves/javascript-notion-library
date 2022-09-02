/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    library: 'NotionClient',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts'],
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
