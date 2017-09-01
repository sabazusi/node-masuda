var path = require('path');
module.exports = {
  entry: {
    main: "./src/index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "sample"),
    port: 8000,
    filename: 'index.html'
  }
}
