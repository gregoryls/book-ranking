const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    utils: "./src/utils.js",
    newBook: "./src/newBookTools.js",
    // scraping: "./src/scraping.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Book Ranking",
      minify: false,
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Book Ranking Node",
      minify: false,
      filename: "nodeIndex.html",
      template: "./src/nodeIndex.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
