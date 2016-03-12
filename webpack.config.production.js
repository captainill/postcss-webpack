const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = Object.create(baseConfig);
//overwrite output to min
config.output = {
  filename: 'dist/ReactTagSelect.min.js',
  libraryTarget: 'umd',
  library: 'ReactTagSelect'
};
config.plugins = [
  new ExtractTextPlugin('dist/style.css', {
    allChunks: true
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
];

module.exports = config;
