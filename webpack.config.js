const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.join(__dirname, 'index.jsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // publicPath: '/',
    // assetModuleFilename: 'assets/images/[name][ext]'
  },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
  // },
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    // static: './dist', // default 'public'
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react'],
            ],
            // plugins: ['react-refresh/babel', '@babel/plugin-proposal-class-properties']
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   React: 'react',
    // }),
    // new RefreshWebpackPlugin()

    new ESLintPlugin({}),

    new HtmlWebpackPlugin({
      title: 'development',
      template: path.join(__dirname, 'index.html'),
      favicon: 'favicon.png',
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),
  ],
};
