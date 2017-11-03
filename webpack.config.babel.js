var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

var LAUNCH_COMMAND = process.env.npm_lifecycle_event

var isProduction = LAUNCH_COMMAND === 'production'

process.env.BABEL_ENV = LAUNCH_COMMAND

var productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

var base = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]' }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ]
  },
}

var developmentConfig= {
  devtool: 'cheap-module-source-map', 
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
}

var productionConfig= {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin],
}

export default Object.assign({}, base, 
  isProduction === true ? productionConfig : developmentConfig
)

// module.exports = {
//   devtool: 'cheap-module-source-map',
//   entry: [
//     PATHS.app,
//   ],
//   output: {
//     path: PATHS.build,
//     filename: "index_bundle.js"
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
//       { test: /\.css$/, loader: 'style-loader!css-loader' }
//     ]
//   },
//   plugins: [HTMLWebpackPluginConfig, productionPlugin]
// }