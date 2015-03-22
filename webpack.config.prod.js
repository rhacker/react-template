module.exports = {
  cache: true,
  entry: './js/main.js',
  output: {
      path: __dirname + "/dist",
      filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
