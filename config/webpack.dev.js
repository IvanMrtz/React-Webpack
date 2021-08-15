const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  mode: "development",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: "chrome",
    hot: true,
  },
  target: "web", // Fix the bug from package.json --> browserslist
  devtool: "eval-source-map",
});
