var HtmlWebpackPlugin = require('html-webpack-plugin');
var R = require('ramda');

var STUB_ENTRY_FILES = {
  stub1: `${__dirname}/stub/stub1.js`,
  stub2: `${__dirname}/stub/stub2.js`
};

var OUTPUT_HTMLS = R.pipe(
  R.mapObjIndexed((value, key) => new HtmlWebpackPlugin({
    chunks: [key],
    filename: `${__dirname}/dist/${key}.html`,
    template: 'template.html'
  })),
  R.values
)(STUB_ENTRY_FILES);

var webpackConfig = {
  entry: STUB_ENTRY_FILES,
  output: {
    path: `${__dirname}/dist/`,
    filename: `[name].js`
  },
  plugins: OUTPUT_HTMLS
};

module.exports = webpackConfig;