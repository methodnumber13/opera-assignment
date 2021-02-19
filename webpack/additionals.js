const path = require('path');

const PATHS = {
  src: path.join(__dirname, '../src'),
  public: path.join(__dirname, '../public'),
  build: path.join(__dirname, '../build'),
  assets: 'assets',
};
const STATS = {
  assets: false,
  children: false,
  chunks: false,
  chunkModules: false,
  colors: true,
  entrypoints: false,
  hash: false,
  modules: false,
  moduleAssets: false,
  timings: false,
  version: false,
};

module.exports = { PATHS, STATS };
