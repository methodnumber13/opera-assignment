const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const Dotenv = require('dotenv-webpack');

const { PATHS, STATS } = require('./additionals');

module.exports = env => {
  const isDev = env.mode === 'development';
  modeLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  let plugins = [
      new WebpackBar(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          target: JSON.stringify('web'),
        },
      }),
      new HtmlWebpackPlugin({
        favicon: `${PATHS.public}/favicon.png`,
        filename: 'index.html',
        template: `${PATHS.public}/index.html`,
        inject: true,
        chunks: 'all',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
      new CaseSensitivePathsPlugin(),
      new DuplicatePackageCheckerPlugin(),
      new CircularDependencyPlugin({ include: /src/, failOnError: true }),
      new CleanWebpackPlugin(),
      new Dotenv(),
    ],
    externals = { paths: PATHS };

  return {
    stats: STATS,
    mode: env.mode,
    entry: {
      sp: PATHS.src,
    },
    watchOptions: {
      aggregateTimeout: 100, //таймаут перед пересбором
    },
    devtool: isDev ? 'eval' : false,
    target: 'web',
    externals,
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: path.resolve(__dirname, '../cache/loaders/js'),
              },
            },
            {
              loader: 'babel-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.p?css$/,
          use: [
            {
              loader: 'cache-loader',
              options: {
                cacheDirectory: path.resolve(__dirname, '../cache/loaders/css'),
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.p?css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-nested', 'postcss-simple-vars', 'postcss-preset-env', 'autoprefixer'],
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [{ loader: modeLoader }, { loader: 'css-loader' }],
          exclude: /(public)/,
        },

        {
          test: /\.(jpeg|jpg|png|svg|gif|woff|woff2|eot|ttf)$/,
          use: {
            loader: `url-loader?limit=1024&name=assets/[name].[ext]`,
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
      extensions: ['.js'],
    },
    devServer: {
      ...env.devServer,
      contentBase: PATHS.public,
      stats: STATS,
    },
  };
};
