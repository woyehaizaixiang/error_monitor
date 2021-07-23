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
  devServer: {
    contentBase: path.join(__dirname, `dist`), // 告诉服务器从何处提供内容
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
}