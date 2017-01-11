const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  resolve: {
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, 'src')
    ],
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [__dirname + '/src'],
      // exclude: /node_modules/,
      loader: 'babel'
    },{
      test: /\.styl$/,
      loader: 'ignore-loader',
    },{
      test: /\.(svg|jpg|png)$/,
      loader: 'file?name=[path][name].[ext]?[hash]' // we can use here url loader to use it in js like data-url base64, hot reload need hash
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
};