const path = require("path");

module.exports = (env) => {
    const isProduction = env.production;

  console.log("env: ", (env.production === true)? 1:0);
  return {
    entry: ["babel-polyfill", "./src/app.js"],
    mode: "development",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : "eval-cheap-module-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

// loader
