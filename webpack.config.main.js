const path = require("path"),
  HTMLWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  mode = process.env.NODE_ENV,
  isDev = mode === "development",
  generateFilename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: `./js/${generateFilename("js")}`,
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: isDev ? "[path][name][ext]" : "[path][name][hash][ext]",
    environment: {
      arrowFunction: false,
    },
    clean: {
      keep(asset) {
        return asset.includes("admin");
      },
    },
  },
  mode,
  context: path.resolve(__dirname, "src"),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${generateFilename("css")}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./*.php",
          to: "./",
        },
        {
          from: "crm-backend",
          to: "crm-backend",
        },
      ],
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["pngquant", { quality: [0.3, 0.5], speed: 3, strip: true, dithering: 0.75 }],
          ["gifsicle", { interlaced: false, optimizationLevel: 3 }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jepg|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDev && "source-map",
};
