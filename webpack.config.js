const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// common js es5 (node 기본 채택한 파일시스템)
module.exports = {
  entry: path.resolve(__dirname, './src'), // 코드의 시작점
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'], // import 'index' 확장자 생략
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
}
