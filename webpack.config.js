
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/dist/`,
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = webpackConfig;