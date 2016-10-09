const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  devtool: 'source-source-map',
  debug: true,
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  devServer: {
    outputPath: path.resolve(__dirname, './static'),
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new WriteFilePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', [
          'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]',
          'log-source',
          // 'postcss-loader',
          'sass'
        ])
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loaders: [
          'babel'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['> 0.5%'] })
  ],
  resolveLoader: {
    fallback: [
      path.resolve(__dirname, 'loaders'),
      path.join(process.cwd(), 'node_modules')
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  }
};
