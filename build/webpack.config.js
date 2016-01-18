var PORT = 9191

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + PORT,
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    publicPath: '/assets'
  },
  module: {
    loaders: require('./loaders.config')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    publicPath: '/assets',
    filename: 'bundle.js',
    port: PORT,
    host: '0.0.0.0'
  }
}
