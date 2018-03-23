module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }],
    rules: [
    {
      test: require.resolve('jquery'),
      use: [
        { loader: 'expose-loader', options: 'jQuery' },
        { loader: 'expose-loader', options: '$' }
      ]
    },

    {
      test: require.resolve('tether'),
      use: [
        { loader: 'expose-loader', options: 'Tether' }
      ]
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};
