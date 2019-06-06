const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, '/dist/'),
    compress: true,
    publicPath: path.join(__dirname, '/'),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
}