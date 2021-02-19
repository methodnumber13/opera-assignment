const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const init = require('./webpack.init.config');

const name = require('../package.json').name;
const { PATHS, STATS } = require('./additionals');

module.exports = (env, options) =>
  merge(
    {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [{ loader: MiniCssExtractPlugin.loader, options: { esModule: true } }],
          },
        ],
      },
    },
    init(env, options),
    {
      mode: 'production',
      output: {
        path: PATHS.build,
        publicPath: '/',
        filename: `${PATHS.assets}/[name][chunkhash].js`,
        chunkFilename: `${PATHS.assets}/[name][chunkhash].js`,
        hashFunction: 'sha1',
        hashDigestLength: 40,
      },
      optimization: {
        usedExports: true,
        minimize: true,
        runtimeChunk: false,
        splitChunks: {
          chunks: 'all',
          minSize: 2048,
          automaticNameDelimiter: '.',
          cacheGroups: {
            icons: {
              test: /[\\/]icons[\\/]/,
            },
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: false,
            extractComments: 'all',
          }),
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: `[name].${name}.[contenthash].css`,
          chunkFilename: `[name].${name}.[contenthash].css`,
        }),
        // new OptimizeCSSAssetsPlugin({}),
        new webpack.ids.HashedModuleIdsPlugin({
          hashFunction: 'md4',
          hashDigest: 'base64',
          hashDigestLength: 4,
        }),
      ],
    }
  );
