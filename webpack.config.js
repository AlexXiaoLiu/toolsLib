const path = require('path');

module.exports = {
  entry: './index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'index.js'
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader'
        }
      ]
    }]
  }
}