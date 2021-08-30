const path = require('path')

// common js es5 (node 기본 채택한 파일시스템)
module.exports = {
  entry: path.resolve(__dirname, './src'), // 코드의 시작점
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
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
}
