var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, '/../../public/cepp'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      // Allows `import example from 'modules/example';`
      'modules': path.join(__dirname, 'modules'),

      // Allows `import example from 'components/example';`
      'components': path.join(__dirname, 'shared/components'),
      'containers': path.join(__dirname, 'shared/containers'),

      // Allows sass importing: `@import '~styles/mixins/example';`
      'styles': path.join(__dirname, 'assets/styles'),

      // Allows importing images: `import logo from 'images/logo.png';`
      'images': path.join(__dirname, 'assets/images'),

      // Allows referencing of fonts in css `src: url('fonts/comic-sans.woff');`
      'fonts': path.join(__dirname, 'assets/fonts')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?stage=0',
        include: __dirname
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass'
        ],
        include: [
          path.join(__dirname, 'styles'),
          path.join(__dirname, 'routes'),
          path.join(__dirname, 'shared')
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file?name=[path][name]___[hash:base64:5].[ext]',
        include: path.join(__dirname, 'assets/img')
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        loader: 'file',
        include: path.join(__dirname, 'assets/fonts')
      }
    ]
  }
};
