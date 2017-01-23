const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/src`,
  entry: {
    app: './entry-point',
  },
  output: {
    path: `${__dirname}/../back/public`,
    filename: '[name].js',        // key of entry
    publicPath: './',        //  http://static.com/js/app/js
    chunkFilename: 'chunk-[id].js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [`${__dirname}/src`],
      // exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style',
        'css?modules&importLoaders=1&localIdentName=[path].[name].[local].[hash:base64:5]' +
        '!autoprefixer?browsers=last 2 versions' +
        '!stylus?resolve url',
      ),
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'file?name=[path][name].[ext]?[hash]', // hot reload need hash
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].etp.css'
      , { allChunks: true },
    ),
    new webpack.optimize.CommonsChunkPlugin({ // find smth commnon and creates seprated modules
      name: 'commonChank',
      minChunks: 2, // common if only in two files or more
      // chunks: ['about', 'home']
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: '../index.html',
      // filename: 'index.html',
      // chunks: ['common', 'common.css', 'about'],
      // path: __dirname + '/public',
    }),
  ],
  resolve: {
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['', '.js', '.jsx', '.styl'],
  },
  resolveLoader: {
    modulesDirectories: [path.resolve(__dirname, '../node_modules')],
    moduleTemplates: ['*-loader', '* '],
    extensions: ['', '.js'],
  },

  devtool: 'cheap-module-inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: [{
      path: '/api',
      target: 'http://localhost:3000', // express
    }],
    historyApiFallback: true, // returns index html in case of strange request
    contentBase: `${__dirname}back/public`, // this is using for serving static files from disc
  },
};
