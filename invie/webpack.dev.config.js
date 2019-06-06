const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
// const R = require("@babel/core").transform("code", {
//   plugins: ["@babel/plugin-proposal-object-rest-spread"]
// });
// const spreat = require("@babel/plugin-proposal-object-rest-spread");

module.exports = {
  mode: 'development',
  entry: {
    invie: ['babel-polyfill', path.resolve(__dirname, 'src/invie.js')],
    index: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000,
    publicPath: path.resolve(__dirname, '/'),
    contentBase: path.join(__dirname, '/dist/'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-object-rest-spread"]
        }
      },
      // Solo para desarrollo
      // {
      //   test: /\.css$/,
      //   use: ['style-loader','css-loader']
      // },
      // usar para produccion.
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name][hash].css"),
  ]
}