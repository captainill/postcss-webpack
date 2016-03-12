var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = Object.create(baseConfig);
config.plugins = [
  new ExtractTextPlugin('[name].css', {
    allChunks: true
  })
];

module.exports = config;
