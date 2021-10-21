const webpack = require('webpack')
const path = require('path')
const WeexTemplateTarget = require('../index')

const weexConfig = {
  target: WeexTemplateTarget,
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'RUNTIME': JSON.stringify('weex')
      }
    })
  ]
};

module.exports = weexConfig