const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUT_DIR = path.join(__dirname, 'dist');

module.exports = {
  entry: './ui/js/app.js',
  output: {
    path: OUT_DIR,
    filename: 'bundle.[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './ui/index.html'
    })
  ],
  devtool: 'source-map'
};
