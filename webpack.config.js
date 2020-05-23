const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: "production",
  entry: {
    english: "./src/english.js",
    math: "./src/math.js",
    chinese: "./src/chinese.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: false, // 生产默认是 true
    splitChunks: {
      chunks: "all",
      minSize: 400,
      maxSize: 5000,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          priority: 1,
          name: 'vender'
        }
      }
    },
    
  }
};