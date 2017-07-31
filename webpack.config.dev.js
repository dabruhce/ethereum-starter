

const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');

const config = Object.create(baseConfig);
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

module.exports = config;
