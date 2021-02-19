const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const init = require('./webpack.init.config');
const { PATHS, STATS } = require('./additionals');

module.exports = (env, options) =>
  merge(
    {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
            ],
          },
        ],
      },
      optimization: {
        removeAvailableModules: false,
        mergeDuplicateChunks: false,
        removeEmptyChunks: false,
        splitChunks: false,
      },
      output: {
        path: PATHS.build,
        publicPath: '/',
        filename: `${PATHS.assets}/[name][fullhash].js`,
        chunkFilename: `${PATHS.assets}/[name][fullhash].js`,
      },
      mode: 'development',
      //   extractCss: false,
      devServer: {
        port: 9009,
        host: 'localhost',
        // public: 'https://localhost',
        disableHostCheck: true,
        publicPath: '/',
        hot: true,
        watchContentBase: true,
        progress: true,
        open: true,
        historyApiFallback: true,
        clientLogLevel: 'silent',
        overlay: {
          errors: true,
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}/${'[fullhash].css'}`,
          chunkFilename: `${PATHS.assets}/${'[chunkhash].css'}`,
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
    init(env, options)
  );
