var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

config.devtool = 'cheap-module-eval-source-map';
config.entry = [
  'webpack-hot-middleware/client',
  path.join(__dirname, 'index')
];
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = config;
