var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.output.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.DedupePlugin(), // https://github.com/webpack/webpack/issues/1082
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = config;
