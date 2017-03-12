var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

var webpackConfig = {
  entry: {
    stub1: `${__dirname}/stub/stub1.js`,
    stub2: `${__dirname}/stub/stub2.js`
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: `[name].js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['stub1'],
      filename: `${__dirname}/dist/stub1.html`
    }),
    new HtmlWebpackPlugin({
      chunks: ['stub2'],
      filename: `${__dirname}/dist/stub2.html`
    }),
  ]
};

module.exports = webpackConfig;