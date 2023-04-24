/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', path.resolve(__dirname, '../src/index.tsx')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      hooks: path.resolve(__dirname, '../src/hooks'),
      store: path.resolve(__dirname, '../src/store'),
      types: path.resolve(__dirname, '../src/types'),
      utils: path.resolve(__dirname, '../src/utils'),
      _view: path.resolve(__dirname, '../src/components/_view'),
      _taskbar: path.resolve(__dirname, '../src/components/_taskbar'),
      _plans: path.resolve(__dirname, '../src/components/_plans'),
      _commons: path.resolve(__dirname, '../src/components/_commons'),
      _explorer: path.resolve(__dirname, '../src/components/_explorer'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          {
            loader: 'file-loader',
          },
        ],
        type: 'javascript/auto',
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src', 'index.html'),
      favicon: path.join(__dirname, '../src', 'favicon.ico'),
    }),
    new CleanWebpackPlugin(),
  ],
};
