module.exports = {
  // entry: "./client/src/index.jsx",
  entry: ["@babel/polyfill", "./client/src/index.jsx"],
  output: {
    // path: __dirname + "deployment",
    path: __dirname + "/client/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true
      }
    }
  }
};
