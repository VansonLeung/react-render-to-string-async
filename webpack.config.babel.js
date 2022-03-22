import path from 'path';

const configs = [];

// https://github.com/nfl/react-helmet/issues/327
configs.push({
  devtool: 'inline-source-map',
  entry: {
    Helmet: path.join(__dirname, 'node_modules/react-helmet/lib/Helmet'),
  },
  externals: {
    'prop-types': {amd: 'prop-types', commonjs: 'prop-types', commonjs2: 'prop-types', root: 'PropTypes', var: 'PropTypes'},
    'react': {amd: 'react', commonjs: 'react', commonjs2: 'react', root: 'React', var: 'React'},
    'react-dom': {amd: 'react-dom', commonjs: 'react-dom', commonjs2: 'react-dom', root: 'ReactDOM', var: 'ReactDOM'},
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'browser',
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/umd'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
});

export default configs;
