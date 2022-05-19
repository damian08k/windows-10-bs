/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      view: path.resolve(__dirname, '../src/components/view'),
      store: path.resolve(__dirname, '../src/store'),
      types: path.resolve(__dirname, '../src/types'),
      utils: path.resolve(__dirname, '../src/utils'),
      Taskbar: path.resolve(__dirname, '../src/components/Taskbar'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      exclude: 'node_modules',
    }),
  ],
});
