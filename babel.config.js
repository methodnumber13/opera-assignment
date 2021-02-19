const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const presets = [
  [
    '@babel/preset-env',
    {
      bugfixes: true,
      loose: true,
      targets: {
        esmodules: true,
      },
    },
  ],
  ['@babel/preset-react', { useSpread: true }],
];

module.exports = {
  presets,
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src/'],
        extensions: ['.jsx', '.js'],
      },
    ],
    '@emotion',
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    ['@babel/proposal-class-properties', { loose: true }],
  ],
};
