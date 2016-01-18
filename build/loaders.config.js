module.exports = [
  {
    test: /\.(js|jsx)$/,
    loaders: [
      'react-hot',
      'babel'
    ],
    exclude: /node_modules/
  },
  {
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader!autoprefixer-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    exclude: /node_modules/
  }
]
