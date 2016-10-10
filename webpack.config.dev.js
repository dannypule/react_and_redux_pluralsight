import webpack from 'webpack';
import path from 'path'; // path is a node.js utility

export default {
  debug: true, // debug mode set to true
  devtool: 'cheap-module-eval-source-map', // one of many options we could use to our devtool
  noInfo: false, // webpack will display a list of all the files it's bundling
  entry: [ // defines entry point for app
    'eventsource-polyfill', // middleware necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // middleware reloads the page if hot module reloading fails.
    './src/index' // app's entry point passed in last - order is critical
  ],
  target: 'web', // we can also set this to node if we were using webpack to run in node. set to web for web browser use
  output: { // we tell webpack where to create our dev bundle (creates bundles in memory)
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { // we tell webpack's devServer where our code is
    contentBase: './src'
  },
  plugins: [ // define some plugins which will enhance webpack's power
    new webpack.HotModuleReplacementPlugin(), // allow to replace modules without having to do a full refresh
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};