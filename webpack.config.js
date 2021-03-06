const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./frontend-js/main.js",
  output: {
    filename: "main-bundled-2.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
