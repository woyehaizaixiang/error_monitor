const path = require('path');
module.exports = {
  entry: './main.ts',
  output:{
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
  },
  // mode: 'development',
  module:{
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
}