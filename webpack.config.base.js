const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');


module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass!postcss')
      }
    ]
  },
  postcss: function postcss() {
    return [
      postcssImport({ addDependencyTo: webpack }), // Must be first item in list
      autoprefixer
    ];
  }
};
