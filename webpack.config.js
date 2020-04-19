const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');

module.exports = env => {
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = env && env.ENVIRONMENT ? basePath + env.ENVIRONMENT : basePath;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  return {
    entry: {
      polyfill: 'babel-polyfill',
      app: './index.js'
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/',
    },
    devServer: {
      contentBase: './build',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.wasm$/,
          type: 'javascript/auto',
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        inject: true,
        template: path.resolve('./index.html'),
      }),
      new CopyWebPackPlugin([
        { from: "assets", to: "assets"}
      ]),
      new Dotenv({
        path: finalPath,
      }),
      new webpack.EnvironmentPlugin({
        GRAPHQL_ENDPOINT: '',
      }),
    ]
  }
};