module.exports = {
  entry: './example/src/index.js',
  output: {
    filename: './example/dist/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
