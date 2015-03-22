var webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: './js/main.js',
  output: {
      path: __dirname + "/dist",
      filename: 'main.js',
      publicPath: '/'
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compressor: {
              warnings: false
          }
      })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
